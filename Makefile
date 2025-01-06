upgrade-deps:
	@ncu -u
	@pnpm i

up:
	@docker compose up -d
	
down:
	@docker compose down -v