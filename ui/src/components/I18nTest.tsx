import React from 'react';
import { t, getCurrentLanguage, translateStatus } from '../i18n';

export function I18nTest() {
  const currentLang = getCurrentLanguage();
  
  return (
    <div className="p-4 space-y-4 border rounded bg-card">
      <h2 className="text-lg font-semibold">国际化测试 / I18n Test</h2>
      <p>当前语言 / Current Language: <strong>{currentLang}</strong></p>
      
      <div className="space-y-2">
        <h3 className="font-medium">菜单项 / Menu Items:</h3>
        <ul className="space-y-1 text-sm">
          <li>• {t('dashboard')}</li>
          <li>• {t('queues')}</li>
          <li>• {t('dagRuns')}</li>
          <li>• {t('dagDefinitions')}</li>
          <li>• {t('workers')}</li>
          <li>• {t('systemStatus')}</li>
        </ul>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium">状态 / Status:</h3>
        <ul className="space-y-1 text-sm">
          <li>• {translateStatus('Success')}</li>
          <li>• {translateStatus('Failed')}</li>
          <li>• {translateStatus('Running')}</li>
          <li>• {translateStatus('Cancelled')}</li>
          <li>• {translateStatus('Not Started')}</li>
          <li>• {translateStatus('Queued')}</li>
        </ul>
      </div>
    </div>
  );
}