test:
	@cd examples/app; npm install
	@./node_modules/.bin/mocha \
		--reporter spec \
		--timeout 10s \
		--bail

.PHONY: test