# Dagu UI 国际化 (Internationalization)

这个文件夹包含了 Dagu UI 的国际化配置和翻译文件。

## 功能特性

- 支持英文 (en) 和中文 (zh) 两种语言
- 自动检测浏览器语言设置
- 语言设置保存在 localStorage 中
- 简单的翻译函数和状态翻译

## 使用方法

### 基本翻译

```typescript
import { t } from '../i18n';

// 使用翻译函数
const title = t('dashboard'); // 英文: "Dashboard", 中文: "仪表板"
```

### 状态翻译

```typescript
import { translateStatus } from '../i18n';

// 翻译状态文本
const status = translateStatus('Running'); // 英文: "Running", 中文: "运行中"
```

### 语言切换

```typescript
import { setLanguage } from '../i18n';

// 切换到中文
setLanguage('zh');

// 切换到英文
setLanguage('en');
```

### 获取当前语言

```typescript
import { getCurrentLanguage } from '../i18n';

const currentLang = getCurrentLanguage(); // 'en' 或 'zh'
```

## 语言切换组件

UI 中包含了一个语言切换组件 `LanguageSwitcher`，已经集成在侧边栏菜单中。

## 添加新的翻译

1. 在 `index.ts` 中的 `Translations` 接口添加新的键
2. 在 `enTranslations` 和 `zhTranslations` 对象中添加对应的翻译
3. 使用 `t('newKey')` 来获取翻译文本

## 文件结构

- `index.ts` - 主要的国际化配置和翻译文件
- `README.md` - 使用说明文档

## 支持的语言

- **英文 (en)** - 默认语言
- **中文 (zh)** - 简体中文

## 浏览器语言检测

系统会自动检测浏览器的语言设置：
- 如果浏览器语言以 'zh' 开头，默认使用中文
- 否则使用英文作为默认语言
- 用户手动设置的语言会保存在 localStorage 中并优先使用