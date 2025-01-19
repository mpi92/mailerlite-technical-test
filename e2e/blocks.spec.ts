import {
  test,
  expect,
  type Page,
} from '@playwright/test';

async function createBlock(page: Page, blockType: 'Text' | 'Image') {
  const toolbar = page.getByRole('complementary', { name: 'Toolbar' });
  await toolbar.getByRole('button', { name: blockType }).click();
}

async function getBlockItemsInPage(page: Page) {
  const content = page.getByRole('region', { name: 'Main Content' });
  return await content.getByTestId('block').all();
}

test.describe('Blocks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async ({ page }) => {
    await page.reload();
  });

  test('Creates a and renders a Text block', async ({ page }) => {
    await createBlock(page, 'Text');

    const blocks = await getBlockItemsInPage(page);

    expect(blocks.at(0)!.getByTestId('textBlock')).toBeVisible();
  });

  test('Removes an existimg Text block', async ({ page }) => {
    await createBlock(page, 'Text');

    let blocks = await getBlockItemsInPage(page);

    const textBlock = blocks.at(0)!.getByTestId('textBlock');

    await textBlock.getByRole('button', { name: 'remove' }).click();

    blocks = await getBlockItemsInPage(page);

    expect(blocks.length).toBe(0);
  });

  test('Creates a and renders an Image block', async ({ page }) => {
    await createBlock(page, 'Image');

    const blocks = await getBlockItemsInPage(page);

    expect(blocks.at(0)!.getByTestId('imageBlock')).toBeVisible();
  });

  test('Removes an existimg Image block', async ({ page }) => {
    await createBlock(page, 'Image');

    let blocks = await getBlockItemsInPage(page);

    const textBlock = blocks.at(0)!.getByTestId('imageBlock');

    await textBlock.getByRole('button', { name: 'remove' }).click();

    blocks = await getBlockItemsInPage(page);

    expect(blocks.length).toBe(0);
  });

  test('Drags and drops two different block types to change their order', async ({ page }) => {
    await createBlock(page, 'Text');
    await createBlock(page, 'Image');

    let blocks = await getBlockItemsInPage(page);

    await blocks.at(1)!.getByRole('button', { name: 'Block Drag Handle' }).dragTo(blocks.at(0)!);

    expect(blocks.at(0)!.getByTestId('imageBlock')).toBeVisible();
    expect(blocks.at(1)!.getByTestId('textBlock')).toBeVisible();
  });
});