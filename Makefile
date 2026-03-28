.PHONY: all backend frontend clean help

all: backend frontend

backend:
	@echo "=== Building backend ==="
	@cd backend && $(MKDIR) build 2>nul || true
	@cd backend/build && cmake .. 
	@cmake --build backend/build 

frontend:
	@echo "=== Building frontend ==="
	@cd frontend && npm install --silent
	@cd frontend && npm run build

clean:
	@echo "=== Project cleanup ==="
	@rm -rf backend/build 2>nul || true
# 	rm -rf frontend/dist
# 	rm -rf frontend/node_modules

help:
	@echo "Available commands:"
	@echo "  make			- build backend и frontend"
	@echo "  make backend	- build only backend"
	@echo "  make frontend	- build only frontend"
	@echo "  make clean		- clean build и dist"



