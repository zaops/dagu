#!/usr/bin/env node

/**
 * 验证国际化翻译的完整性
 * Validates the completeness of internationalization translations
 */

const fs = require('fs');
const path = require('path');

// 读取国际化文件
const i18nPath = path.join(__dirname, '../src/i18n/index.ts');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

// 提取翻译键
function extractTranslationKeys(content) {
  const interfaceMatch = content.match(/interface Translations \{([\s\S]*?)\}/);
  if (!interfaceMatch) {
    throw new Error('Could not find Translations interface');
  }

  const interfaceContent = interfaceMatch[1];
  const keys = [];
  const lines = interfaceContent.split('\n');

  for (const line of lines) {
    const match = line.trim().match(/^(\w+):\s*string;/);
    if (match) {
      keys.push(match[1]);
    }
  }

  return keys;
}

// 提取翻译对象的键
function extractObjectKeys(content, objectName) {
  const regex = new RegExp(
    `const ${objectName}: Translations = \\{([\\s\\S]*?)\\};`
  );
  const match = content.match(regex);
  if (!match) {
    throw new Error(`Could not find ${objectName} object`);
  }

  const objectContent = match[1];
  const keys = [];
  const lines = objectContent.split('\n');

  for (const line of lines) {
    const match = line.trim().match(/^(\w+):\s*['"`]/);
    if (match) {
      keys.push(match[1]);
    }
  }

  return keys;
}

try {
  console.log('🔍 验证国际化翻译完整性...\n');

  // 提取所有键
  const interfaceKeys = extractTranslationKeys(i18nContent);
  const enKeys = extractObjectKeys(i18nContent, 'enTranslations');
  const zhKeys = extractObjectKeys(i18nContent, 'zhTranslations');

  console.log(`📋 接口定义了 ${interfaceKeys.length} 个翻译键`);
  console.log(`🇺🇸 英文翻译包含 ${enKeys.length} 个键`);
  console.log(`🇨🇳 中文翻译包含 ${zhKeys.length} 个键\n`);

  // 检查缺失的键
  let hasErrors = false;

  // 检查英文翻译
  const missingEnKeys = interfaceKeys.filter((key) => !enKeys.includes(key));
  if (missingEnKeys.length > 0) {
    console.log('❌ 英文翻译中缺失的键:');
    missingEnKeys.forEach((key) => console.log(`   - ${key}`));
    hasErrors = true;
  }

  // 检查中文翻译
  const missingZhKeys = interfaceKeys.filter((key) => !zhKeys.includes(key));
  if (missingZhKeys.length > 0) {
    console.log('❌ 中文翻译中缺失的键:');
    missingZhKeys.forEach((key) => console.log(`   - ${key}`));
    hasErrors = true;
  }

  // 检查多余的键
  const extraEnKeys = enKeys.filter((key) => !interfaceKeys.includes(key));
  if (extraEnKeys.length > 0) {
    console.log('⚠️  英文翻译中多余的键:');
    extraEnKeys.forEach((key) => console.log(`   - ${key}`));
  }

  const extraZhKeys = zhKeys.filter((key) => !interfaceKeys.includes(key));
  if (extraZhKeys.length > 0) {
    console.log('⚠️  中文翻译中多余的键:');
    extraZhKeys.forEach((key) => console.log(`   - ${key}`));
  }

  if (!hasErrors) {
    console.log('✅ 所有翻译键都已正确定义！');
  }

  // 显示统计信息
  console.log('\n📊 统计信息:');
  console.log(`   - 总翻译键数: ${interfaceKeys.length}`);
  console.log(
    `   - 英文完整性: ${(((enKeys.length - extraEnKeys.length) / interfaceKeys.length) * 100).toFixed(1)}%`
  );
  console.log(
    `   - 中文完整性: ${(((zhKeys.length - extraZhKeys.length) / interfaceKeys.length) * 100).toFixed(1)}%`
  );

  process.exit(hasErrors ? 1 : 0);
} catch (error) {
  console.error('❌ 验证失败:', error.message);
  process.exit(1);
}
