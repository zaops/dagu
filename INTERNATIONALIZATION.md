# Dagu UI 国际化指南 / Internationalization Guide

本文档介绍如何在 Dagu UI 中实现和使用国际化功能。

## 概述 / Overview

Dagu UI 现在支持多语言界面，目前支持：
- 英文 (English) - `en`
- 中文 (简体中文) - `zh`

## 实现的功能 / Implemented Features

### 1. 核心国际化系统
- 📁 `ui/src/i18n/index.ts` - 主要的国际化配置文件
- 🔧 自动语言检测（基于浏览器设置）
- 💾 语言设置持久化（localStorage）
- 🔄 动态语言切换

### 2. 翻译的组件
- 🧭 **侧边栏菜单** (`ui/src/menu.tsx`)
  - 所有菜单项已翻译
  - 分组标题已翻译
  - 版本信息已翻译

- 👷 **工作节点页面** (`ui/src/pages/workers/index.tsx`)
  - 页面标题和搜索提示已翻译
  - 状态指示器已翻译

- 🏷️ **状态芯片组件** (`ui/src/components/StatusChipI18n.tsx`)
  - 自动翻译 DAG 运行状态
  - 支持自定义文本覆盖

### 3. 语言切换器
- 🌐 `ui/src/components/LanguageSwitcher.tsx`
- 集成在侧边栏菜单中
- 显示当前语言并允许切换

## 使用方法 / Usage

### 基本翻译

```typescript
import { t } from '../i18n';

// 获取翻译文本
const title = t('dashboard'); // EN: "Dashboard", ZH: "仪表板"
const workers = t('workers'); // EN: "Workers", ZH: "工作节点"
```

### 状态翻译

```typescript
import { translateStatus } from '../i18n';

// 翻译状态文本
const runningStatus = translateStatus('Running'); // EN: "Running", ZH: "运行中"
const successStatus = translateStatus('Success'); // EN: "Success", ZH: "成功"
```

### 使用国际化状态芯片

```typescript
import StatusChipI18n from '../components/StatusChipI18n';
import { Status } from '../api/v2/schema';

// 自动翻译的状态芯片
<StatusChipI18n status={Status.Running} size="sm" />

// 自定义文本（不翻译）
<StatusChipI18n status={Status.Success} size="sm">
  Custom Text
</StatusChipI18n>
```

### 语言切换

```typescript
import { setLanguage, getCurrentLanguage } from '../i18n';

// 获取当前语言
const currentLang = getCurrentLanguage(); // 'en' 或 'zh'

// 切换语言
setLanguage('zh'); // 切换到中文
setLanguage('en'); // 切换到英文
```

## 添加新翻译 / Adding New Translations

### 1. 更新类型定义

在 `ui/src/i18n/index.ts` 中的 `Translations` 接口添加新键：

```typescript
export interface Translations {
  // ... 现有键
  newFeature: string;
  anotherText: string;
}
```

### 2. 添加翻译文本

在英文和中文翻译对象中添加对应文本：

```typescript
const enTranslations: Translations = {
  // ... 现有翻译
  newFeature: 'New Feature',
  anotherText: 'Another Text',
};

const zhTranslations: Translations = {
  // ... 现有翻译
  newFeature: '新功能',
  anotherText: '另一个文本',
};
```

### 3. 在组件中使用

```typescript
import { t } from '../i18n';

function MyComponent() {
  return (
    <div>
      <h1>{t('newFeature')}</h1>
      <p>{t('anotherText')}</p>
    </div>
  );
}
```

## 文件结构 / File Structure

```
ui/src/
├── i18n/
│   ├── index.ts          # 主要国际化配置
│   └── README.md         # 使用说明
├── components/
│   ├── LanguageSwitcher.tsx    # 语言切换组件
│   ├── StatusChipI18n.tsx      # 国际化状态芯片
│   ├── I18nTest.tsx            # 测试组件
│   └── I18nStatusExample.tsx   # 使用示例
├── hooks/
│   └── useTranslation.ts       # 翻译 Hook
└── pages/
    └── workers/index.tsx       # 已更新的工作节点页面
```

## 支持的翻译键 / Supported Translation Keys

### 菜单项 / Menu Items
- `dashboard` - 仪表板
- `queues` - 队列
- `dagRuns` - DAG 运行
- `dagDefinitions` - DAG 定义
- `searchDAGDefinitions` - 搜索 DAG 定义
- `workers` - 工作节点
- `systemStatus` - 系统状态

### 分组标题 / Section Headers
- `overview` - 概览
- `workflows` - 工作流
- `system` - 系统

### 通用操作 / Common Actions
- `search` - 搜索
- `refresh` - 刷新
- `loading` - 加载中
- `error` - 错误
- `success` - 成功
- `cancel` - 取消
- `save` - 保存
- `delete` - 删除
- `edit` - 编辑
- `view` - 查看

### 状态 / Status
- `running` - 运行中
- `failed` - 失败
- `cancelled` - 已取消
- `notStarted` - 未开始
- `queued` - 队列中
- `partialSuccess` - 部分成功

## 构建和测试 / Build and Test

### 构建项目

```bash
cd ui
pnpm install
pnpm run build
```

### 开发模式

```bash
cd ui
pnpm run dev
```

### 类型检查

```bash
cd ui
pnpm run typecheck
```

## 最佳实践 / Best Practices

1. **一致性**: 确保所有相似的文本使用相同的翻译键
2. **上下文**: 为翻译键选择有意义的名称，反映其使用上下文
3. **简洁性**: 保持翻译文本简洁明了
4. **测试**: 在两种语言下测试 UI 以确保布局正常
5. **回退**: 始终提供英文作为回退语言

## 未来改进 / Future Improvements

- [ ] 添加更多语言支持
- [ ] 实现复数形式处理
- [ ] 添加日期和数字格式化
- [ ] 实现动态翻译加载
- [ ] 添加翻译管理工具

## 贡献 / Contributing

如果您想为 Dagu UI 添加新的语言支持或改进现有翻译，请：

1. Fork 项目
2. 创建新的语言文件或更新现有翻译
3. 测试您的更改
4. 提交 Pull Request

## 技术细节 / Technical Details

- **存储**: 语言设置保存在 `localStorage` 中，键为 `dagu-language`
- **检测**: 自动检测浏览器语言，中文用户默认显示中文界面
- **切换**: 语言切换后会重新加载页面以应用新设置
- **类型安全**: 使用 TypeScript 确保翻译键的类型安全