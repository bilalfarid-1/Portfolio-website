#!/usr/bin/env python3
"""
Muhammad Bilal Farid - Portfolio Local Development Server
Lightweight HTTP Server with CORS, MIME-types, and Health Endpoint.
"""

import http.server
import socketserver
import os
import sys
import json
import urllib.parse

PORT = int(os.environ.get("PORT", 8000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        # Ensure correct MIME type handling for modern web assets
        path_lower = path.lower()
        if path_lower.endswith(".js") or path_lower.endswith(".mjs"):
            return "application/javascript"
        if path_lower.endswith(".css"):
            return "text/css"
        if path_lower.endswith(".json"):
            return "application/json"
        if path_lower.endswith(".jfif") or path_lower.endswith(".jpg") or path_lower.endswith(".jpeg"):
            return "image/jpeg"
        if path_lower.endswith(".png"):
            return "image/png"
        if path_lower.endswith(".svg"):
            return "image/svg+xml"
        return super().guess_type(path)

    def end_headers(self):
        # Enable CORS and caching headers for development
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        
        # API Health Endpoint
        if parsed_url.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            payload = {
                "status": "healthy",
                "developer": "Muhammad Bilal Farid",
                "role": "Full-Stack & ML Engineer",
                "version": "2.0.0",
                "endpoints": {
                    "home": "/",
                    "about": "/about-me.html",
                    "portfolio": "/portfolio.html",
                    "skills": "/skills.html",
                    "contact": "/contact.html"
                }
            }
            self.wfile.write(json.dumps(payload, indent=2).encode("utf-8"))
            return

        # Fallback for routing
        super().do_GET()

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        
        if parsed_url.path == "/api/contact":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode("utf-8"))
            except Exception:
                data = {}

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            response = {
                "success": True,
                "message": f"Message received from {data.get('name', 'Anonymous')}. Thank you!",
                "timestamp": "2026-08-19T12:40:00Z"
            }
            self.wfile.write(json.dumps(response).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

def run_server(port=PORT):
    handler = PortfolioHTTPRequestHandler
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"==================================================")
        print(f"  Muhammad Bilal Farid - Portfolio Server Running")
        print(f"  Local URL:   http://localhost:{port}")
        print(f"  Health API:  http://localhost:{port}/api/health")
        print(f"  Root Dir:    {DIRECTORY}")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server gracefully...")
            httpd.server_close()

if __name__ == "__main__":
    port_arg = PORT
    if len(sys.argv) > 1:
        try:
            port_arg = int(sys.argv[1])
        except ValueError:
            pass
    run_server(port_arg)
