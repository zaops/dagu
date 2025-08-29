// 简单的国际化系统
export type Language = 'en' | 'zh';

export interface Translations {
  // 菜单项
  dashboard: string;
  queues: string;
  dagRuns: string;
  dagDefinitions: string;
  searchDAGDefinitions: string;
  workers: string;
  systemStatus: string;
  sendFeedback: string;
  discord: string;
  github: string;
  version: string;

  // 分组标题
  overview: string;
  workflows: string;
  system: string;

  // 通用按钮和操作
  search: string;
  refresh: string;
  loading: string;
  error: string;
  success: string;
  cancel: string;
  save: string;
  delete: string;
  edit: string;
  view: string;

  // 状态
  running: string;
  failed: string;
  cancelled: string;
  notStarted: string;
  queued: string;
  partialSuccess: string;

  // 工作节点状态
  healthy: string;
  warning: string;
  offline: string;
  distributedWorkers: string;
  workerStatus: string;
  searchByIdOrLabels: string;

  // 页面标题和描述
  workersPageTitle: string;
  dagsPageTitle: string;
  dagRunsPageTitle: string;
  queuesPageTitle: string;

  // 表格列标题
  name: string;
  status: string;
  startTime: string;
  endTime: string;
  duration: string;

  // 工作节点相关
  workerMetrics: string;
  totalWorkers: string;
  activeWorkers: string;
  idleWorkers: string;
  cpuUsage: string;
  memoryUsage: string;

  // 日志相关
  viewLog: string;
  stdout: string;
  stderr: string;
  scriptDefined: string;
}

// 英文翻译
const enTranslations: Translations = {
  // 菜单项
  dashboard: 'Dashboard',
  queues: 'Queues',
  dagRuns: 'DAG Runs',
  dagDefinitions: 'DAG Definitions',
  searchDAGDefinitions: 'Search DAG Definitions',
  workers: 'Workers',
  systemStatus: 'System Status',
  sendFeedback: 'Send Feedback',
  discord: 'Discord',
  github: 'GitHub',
  version: 'Version',

  // 分组标题
  overview: 'Overview',
  workflows: 'Workflows',
  system: 'System',

  // 通用按钮和操作
  search: 'Search',
  refresh: 'Refresh',
  loading: 'Loading',
  error: 'Error',
  success: 'Success',
  cancel: 'Cancel',
  save: 'Save',
  delete: 'Delete',
  edit: 'Edit',
  view: 'View',

  // 状态
  running: 'Running',
  failed: 'Failed',
  cancelled: 'Cancelled',
  notStarted: 'Not Started',
  queued: 'Queued',
  partialSuccess: 'Partial Success',

  // 工作节点状态
  healthy: 'Healthy',
  warning: 'Warning',
  offline: 'Offline',
  distributedWorkers: 'Distributed Workers',
  workerStatus: 'Worker Status',
  searchByIdOrLabels: 'Search by ID or labels',

  // 页面标题和描述
  workersPageTitle: 'Workers',
  dagsPageTitle: 'DAG Definitions',
  dagRunsPageTitle: 'DAG Runs',
  queuesPageTitle: 'Queues',

  // 表格列标题
  name: 'Name',
  status: 'Status',
  startTime: 'Start Time',
  endTime: 'End Time',
  duration: 'Duration',

  // 工作节点相关
  workerMetrics: 'Worker Metrics',
  totalWorkers: 'Total Workers',
  activeWorkers: 'Active Workers',
  idleWorkers: 'Idle Workers',
  cpuUsage: 'CPU Usage',
  memoryUsage: 'Memory Usage',

  // 日志相关
  viewLog: 'View Log',
  stdout: 'stdout',
  stderr: 'stderr',
  scriptDefined: 'Script defined',
};

// 中文翻译
const zhTranslations: Translations = {
  // 菜单项
  dashboard: '仪表板',
  queues: '队列',
  dagRuns: 'DAG 运行',
  dagDefinitions: 'DAG 定义',
  searchDAGDefinitions: '搜索 DAG 定义',
  workers: '工作节点',
  systemStatus: '系统状态',
  sendFeedback: '发送反馈',
  discord: 'Discord',
  github: 'GitHub',
  version: '版本',

  // 分组标题
  overview: '概览',
  workflows: '工作流',
  system: '系统',

  // 通用按钮和操作
  search: '搜索',
  refresh: '刷新',
  loading: '加载中',
  error: '错误',
  success: '成功',
  cancel: '取消',
  save: '保存',
  delete: '删除',
  edit: '编辑',
  view: '查看',

  // 状态
  running: '运行中',
  failed: '失败',
  cancelled: '已取消',
  notStarted: '未开始',
  queued: '队列中',
  partialSuccess: '部分成功',

  // 工作节点状态
  healthy: '健康',
  warning: '警告',
  offline: '离线',
  distributedWorkers: '分布式工作节点',
  workerStatus: '工作节点状态',
  searchByIdOrLabels: '按 ID 或标签搜索',

  // 页面标题和描述
  workersPageTitle: '工作节点',
  dagsPageTitle: 'DAG 定义',
  dagRunsPageTitle: 'DAG 运行',
  queuesPageTitle: '队列',

  // 表格列标题
  name: '名称',
  status: '状态',
  startTime: '开始时间',
  endTime: '结束时间',
  duration: '持续时间',

  // 工作节点相关
  workerMetrics: '工作节点指标',
  totalWorkers: '总工作节点',
  activeWorkers: '活跃工作节点',
  idleWorkers: '空闲工作节点',
  cpuUsage: 'CPU 使用率',
  memoryUsage: '内存使用率',

  // 日志相关
  viewLog: '查看日志',
  stdout: '标准输出',
  stderr: '标准错误',
  scriptDefined: '脚本已定义',
};

const translations = {
  en: enTranslations,
  zh: zhTranslations,
};

// 获取当前语言设置
export function getCurrentLanguage(): Language {
  const stored = localStorage.getItem('dagu-language');
  if (stored && (stored === 'en' || stored === 'zh')) {
    return stored;
  }

  // 检测浏览器语言
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }

  return 'en'; // 默认英文
}

// 设置语言
export function setLanguage(lang: Language) {
  localStorage.setItem('dagu-language', lang);
  window.location.reload(); // 简单的重新加载页面来应用新语言
}

// 获取翻译文本
export function t(key: keyof Translations): string {
  const lang = getCurrentLanguage();
  return translations[lang][key] || translations.en[key] || key;
}

// 状态翻译映射
const statusTranslations = {
  en: {
    Success: 'Success',
    Failed: 'Failed',
    Running: 'Running',
    Cancelled: 'Cancelled',
    'Not Started': 'Not Started',
    Queued: 'Queued',
    'Partial Success': 'Partial Success',
  },
  zh: {
    Success: '成功',
    Failed: '失败',
    Running: '运行中',
    Cancelled: '已取消',
    'Not Started': '未开始',
    Queued: '队列中',
    'Partial Success': '部分成功',
  },
};

// 翻译状态文本
export function translateStatus(status: string): string {
  const lang = getCurrentLanguage();
  const statusMap = statusTranslations[lang];
  return statusMap[status as keyof typeof statusMap] || status;
}

// 导出翻译对象
export { translations };
