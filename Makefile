

test:
	npx playwright test --project=chromium

test-example:
	npx playwright test example.spec.ts --project=chromium

test-example-tag:
	npx playwright test --project=chromium --grep @example

test-pom:
	npx playwright test test-2-page-object-model.spec.ts --project=chromium --ui

test-ui:
	npx playwright test --ui

test-trave:
	npx playwright test --trace on

test-debug:
	npx playwright test --debug
