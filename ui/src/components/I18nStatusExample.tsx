import React from 'react';
import { Status } from '../api/v2/schema';
import StatusChipI18n from './StatusChipI18n';
import { t } from '../i18n';

export function I18nStatusExample() {
  const statuses = [
    Status.Success,
    Status.Failed,
    Status.Running,
    Status.Cancelled,
    Status.NotStarted,
    Status.Queued,
    Status.PartialSuccess,
  ];

  return (
    <div className="p-4 space-y-4 border rounded bg-card">
      <h2 className="text-lg font-semibold">{t('status')} - 国际化示例</h2>

      <div className="space-y-3">
        <h3 className="font-medium">自动翻译状态芯片:</h3>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <StatusChipI18n key={status} status={status} size="sm" />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">不同尺寸:</h3>
        <div className="flex flex-wrap items-center gap-2">
          <StatusChipI18n status={Status.Success} size="xs" />
          <StatusChipI18n status={Status.Running} size="sm" />
          <StatusChipI18n status={Status.Failed} size="md" />
          <StatusChipI18n status={Status.Queued} size="lg" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">自定义文本 (不翻译):</h3>
        <div className="flex flex-wrap gap-2">
          <StatusChipI18n status={Status.Success} size="sm">
            Custom Success
          </StatusChipI18n>
          <StatusChipI18n status={Status.Failed} size="sm">
            自定义失败
          </StatusChipI18n>
        </div>
      </div>
    </div>
  );
}
