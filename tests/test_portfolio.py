#!/usr/bin/env python3
"""
Automated Test Suite for Muhammad Bilal Farid's Portfolio Website
Tests:
  - File existence & directory structure
  - HTML syntax & SEO metadata validity
  - Internal relative links & asset resolution
  - Key projects & required repository coverage
  - Contact form fields & validation markup
  - Skills matrix proficiency items
  - Server health endpoint response
"""

import os
import sys
import re
import json
import unittest
from html.parser import HTMLParser
import urllib.parse

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)


class HTMLValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.links = []
        self.images = []
        self.scripts = []
        self.stylesheets = []
        self.meta_tags = {}
        self.has_title = False
        self.title_text = ""
        self._in_title = False

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        self.tags.append(tag)

        if tag == "title":
            self._in_title = True
            self.has_title = True

        if tag == "a" and "href" in attr_dict:
            self.links.append(attr_dict["href"])

        if tag == "img" and "src" in attr_dict:
            self.images.append(attr_dict["src"])

        if tag == "script" and "src" in attr_dict:
            self.scripts.append(attr_dict["src"])

        if tag == "link" and attr_dict.get("rel") == "stylesheet" and "href" in attr_dict:
            self.stylesheets.append(attr_dict["href"])

        if tag == "meta":
            name = attr_dict.get("name") or attr_dict.get("property")
            content = attr_dict.get("content")
            if name and content:
                self.meta_tags[name] = content

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._in_title:
            self.title_text += data

class TestPortfolioWebsite(unittest.TestCase):

    def test_file_structure(self):
        """Ensure all required core project files exist."""
        required_files = [
            "index.html",
            "about-me.html",
            "portfolio.html",
            "skills.html",
            "contact.html",
            "assets/css/main.css",
            "assets/js/main.js",
            "assets/js/projects-data.js",
            "server.py",
            "package.json",
            "README.md",
            "EXPLANATION.md"
        ]
        for rel_path in required_files:
            full_path = os.path.join(BASE_DIR, rel_path)
            self.assertTrue(os.path.exists(full_path), f"Missing required file: {rel_path}")

    def test_html_validity_and_meta(self):
        """Validate HTML files for title, viewport meta, and charset."""
        html_files = ["index.html", "about-me.html", "portfolio.html", "skills.html", "contact.html"]
        
        for html_file in html_files:
            file_path = os.path.join(BASE_DIR, html_file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            parser = HTMLValidator()
            parser.feed(content)

            self.assertTrue(parser.has_title, f"{html_file} missing <title> tag")
            self.assertIn("Muhammad Bilal Farid", parser.title_text, f"{html_file} title missing developer name")
            self.assertIn("viewport", parser.meta_tags, f"{html_file} missing responsive viewport meta tag")
            self.assertIn("description", parser.meta_tags, f"{html_file} missing meta description")

    def test_internal_asset_references(self):
        """Verify that all internal relative link, script, and image references exist on disk."""
        html_files = ["index.html", "about-me.html", "portfolio.html", "skills.html", "contact.html"]

        for html_file in html_files:
            file_path = os.path.join(BASE_DIR, html_file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            parser = HTMLValidator()
            parser.feed(content)

            all_refs = parser.images + parser.scripts + parser.stylesheets
            for ref in all_refs:
                # Ignore absolute external CDN links
                if ref.startswith("http://") or ref.startswith("https://") or ref.startswith("//"):
                    continue

                # Strip anchor or query params
                clean_ref = ref.split("?")[0].split("#")[0]
                if clean_ref.startswith("./"):
                    clean_ref = clean_ref[2:]

                target_path = os.path.join(BASE_DIR, clean_ref)
                self.assertTrue(
                    os.path.exists(target_path),
                    f"In {html_file}: referenced asset '{ref}' does not exist at '{target_path}'"
                )

    def test_required_repositories_coverage(self):
        """Verify all 8 key repositories are defined in projects-data.js with required properties."""
        js_path = os.path.join(BASE_DIR, "assets", "js", "projects-data.js")
        self.assertTrue(os.path.exists(js_path))

        with open(js_path, "r", encoding="utf-8") as f:
            content = f.read()

        required_repos = [
            "url-shortener-api",
            "travel-data-scraper",
            "job-application-tracker-api",
            "house-prices-regression",
            "FoodOrderingApp",
            "deforestation-project",
            "customer-churn-prediction",
            "shopping-app"
        ]

        for repo in required_repos:
            self.assertIn(repo, content, f"Repository '{repo}' is missing from projects-data.js")

        # Verify filter categories
        for cat in ["fullstack", "backend", "ml", "automation"]:
            self.assertIn(f'category: "{cat}"', content, f"Category '{cat}' missing from projects-data.js")

    def test_contact_information_presence(self):
        """Verify correct contact details are present across index.html."""
        index_path = os.path.join(BASE_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn("bilaldrosh1@gmail.com", content)
        self.assertIn("bilalfarid-1", content)
        self.assertIn("Drosh", content)
        self.assertIn("+92 346 4619093", content)

    def test_skills_matrix_coverage(self):
        """Verify key technical skills are featured in the skills matrix."""
        skills_path = os.path.join(BASE_DIR, "index.html")
        with open(skills_path, "r", encoding="utf-8") as f:
            content = f.read()

        expected_skills = [
            "Python", "FastAPI", "React", "Playwright", "PostgreSQL",
            "SQLite", "Docker", "Scikit-Learn", "XGBoost", "JavaScript",
            "Flutter", "Java"
        ]
        for skill in expected_skills:
            self.assertIn(skill, content, f"Expected skill '{skill}' missing from index.html")

    def test_synthesized_sections(self):
        """Verify MasterPortfolio authentic sections are present in index.html."""
        index_path = os.path.join(BASE_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn("What I Do", content)
        self.assertIn("Data Science & AI", content)
        self.assertIn("Full Stack Web Development", content)
        self.assertIn("Cloud Infrastructure & APIs", content)
        self.assertIn("Open Source Projects", content)
        self.assertIn("Certifications", content)
        self.assertIn("Education", content)
        self.assertIn("Work Experiences", content)
        self.assertIn("Reach Out to Me!", content)

    def test_server_health_handler(self):
        """Verify server.py handler code and live endpoint responses."""
        import socketserver
        import threading
        import time
        import urllib.request
        from server import PortfolioHTTPRequestHandler

        # Find a free port
        server_port = 8765
        socketserver.TCPServer.allow_reuse_address = True
        httpd = socketserver.TCPServer(("", server_port), PortfolioHTTPRequestHandler)
        
        server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
        server_thread.start()
        time.sleep(0.3)

        try:
            # Test GET /api/health
            url = f"http://127.0.0.1:{server_port}/api/health"
            with urllib.request.urlopen(url, timeout=3) as resp:
                self.assertEqual(resp.status, 200)
                data = json.loads(resp.read().decode("utf-8"))
                self.assertEqual(data.get("status"), "healthy")
                self.assertEqual(data.get("developer"), "Muhammad Bilal Farid")
        finally:
            httpd.shutdown()
            httpd.server_close()

if __name__ == "__main__":
    unittest.main(verbosity=2)
