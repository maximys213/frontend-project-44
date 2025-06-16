.PHONY: install brain-games publish link lint brain-even 

# Установка зависимостей и настройка прав
install:
	npm ci

# Запуск игр
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node  bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

# Публикация и линкинг
publish:
	npm publish --dry-run

link:
	npm link

# Линтинг
lint:
	npx eslint --fix .
