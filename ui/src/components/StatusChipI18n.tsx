import { cn } from '@/lib/utils';
import React from 'react';
import { Status } from '../api/v2/schema';
import { translateStatus } from '../i18n';

type Props = {
  status?: Status;
  children?: React.ReactNode; // Optional children, will use translated status if not provided
  size?: 'xs' | 'sm' | 'md' | 'lg'; // Size variants
};

// 状态到文本的映射
const statusToText = {
  [Status.Success]: 'Success',
  [Status.Failed]: 'Failed',
  [Status.Running]: 'Running',
  [Status.Cancelled]: 'Cancelled',
  [Status.NotStarted]: 'Not Started',
  [Status.Queued]: 'Queued',
  [Status.PartialSuccess]: 'Partial Success',
};

function StatusChipI18n({ status, children, size = 'md' }: Props) {
  // Determine the colors and icon based on status
  let bgColorClass = '';
  let textColorClass = '';
  let borderColorClass = '';

  switch (status) {
    case Status.Success: // done -> green
      bgColorClass = 'bg-[rgba(0,128,0,0.1)] dark:bg-[rgba(0,100,0,0.2)]';
      borderColorClass = 'border-[green] dark:border-[darkgreen]';
      textColorClass = 'text-[green] dark:text-[lightgreen]';
      break;
    case Status.Failed: // error -> red
      bgColorClass = 'bg-[rgba(255,0,0,0.1)] dark:bg-[rgba(139,0,0,0.2)]';
      borderColorClass = 'border-[red] dark:border-[darkred]';
      textColorClass = 'text-[red] dark:text-[lightcoral]';
      break;
    case Status.Running: // running -> lime
      bgColorClass = 'bg-[rgba(0,255,0,0.1)] dark:bg-[rgba(50,205,50,0.2)]';
      borderColorClass = 'border-[lime] dark:border-[limegreen]';
      textColorClass = 'text-[limegreen] dark:text-[lime]';
      break;
    case Status.Cancelled: // cancel -> pink
      bgColorClass =
        'bg-[rgba(255,192,203,0.1)] dark:bg-[rgba(255,20,147,0.2)]';
      borderColorClass = 'border-[pink] dark:border-[deeppink]';
      textColorClass = 'text-[deeppink] dark:text-[pink]';
      break;
    case Status.NotStarted: // none -> lightblue
      bgColorClass =
        'bg-[rgba(173,216,230,0.1)] dark:bg-[rgba(70,130,180,0.2)]';
      borderColorClass = 'border-[lightblue] dark:border-[steelblue]';
      textColorClass = 'text-[steelblue] dark:text-[lightblue]';
      break;
    case Status.Queued: // queued -> purple
      bgColorClass =
        'bg-[rgba(221,160,221,0.1)] dark:bg-[rgba(147,112,219,0.2)]';
      borderColorClass = 'border-[plum] dark:border-[mediumpurple]';
      textColorClass = 'text-[purple] dark:text-[plum]';
      break;
    case Status.PartialSuccess: // partial success -> orange/amber
      bgColorClass = 'bg-[rgba(251,146,60,0.1)] dark:bg-[rgba(245,158,11,0.2)]';
      borderColorClass = 'border-[orange] dark:border-[#d97706]';
      textColorClass = 'text-[#ea580c] dark:text-[#f59e0b]';
      break;
    default: // Fallback to gray for any other status (including undefined)
      bgColorClass =
        'bg-[rgba(128,128,128,0.1)] dark:bg-[rgba(169,169,169,0.2)]';
      borderColorClass = 'border-[gray] dark:border-[darkgray]';
      textColorClass = 'text-[gray] dark:text-[lightgray]';
  }

  // Size classes
  const sizeClasses = {
    xs: 'text-[10px] py-0 px-1.5',
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-3',
    lg: 'text-base py-1.5 px-4',
  };

  // 获取显示文本：优先使用 children，否则使用翻译的状态文本
  const getDisplayText = () => {
    if (children) {
      return typeof children === 'string'
        ? children.charAt(0).toUpperCase() + children.slice(1)
        : children;
    }

    if (status !== undefined && statusToText[status]) {
      return translateStatus(statusToText[status]);
    }

    return 'Unknown';
  };

  const displayText = getDisplayText();

  // Render a pill-shaped badge with icon and text
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border',
        bgColorClass,
        borderColorClass,
        textColorClass,
        sizeClasses[size]
      )}
    >
      <span
        className={cn(
          'font-normal break-keep text-nowrap whitespace-nowrap',
          textColorClass
        )}
      >
        {displayText}
      </span>
    </div>
  );
}

export default StatusChipI18n;
