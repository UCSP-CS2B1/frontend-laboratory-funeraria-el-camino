from http.server import HTTPServer, BaseHTTPRequestHandler
import os

class RequestHandler(BaseHTTPRequestHandler):
    def headers_content(self, content):
        self.send_response(200)
        self.send_header('Content-type', content)
        self.end_headers()

    def write_content(self, file):
        file = open(file).read()
        self.wfile.write(bytes(file, 'utf-8'))

    def do_POST(self):
        self.headers_content('text/html')

        response = '''
            <html>
            <body>
                <h1>POST request</h1>
            </body>
            </html>
        '''
        self.wfile.write(response.encode())

    def do_GET(self):
        extension = os.path.splitext(self.path)[1]

        if (extension == '.css'):
            self.headers_content('text/css')
            self.write_content('css/style.css')
        else:
            self.headers_content('text/html')
            self.write_content('index.html')

if __name__ == '__main__':
    port = 8000
    server = HTTPServer(('', port), RequestHandler )

    print("Server running on port %s" % port)
    server.serve_forever()