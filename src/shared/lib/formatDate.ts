export const formatDate = (
  iso: string,
  locale?: string,
  options?: Intl.DateTimeFormat,
): string => {
  if (!iso) return '';
  const d = new Date(iso);

  if (Number.isNaN(d.getTime())) return '';

  const fmt = new Intl.DateTimeFormat(locale ?? undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    ...options,
  });

  return fmt.format(d);
};
