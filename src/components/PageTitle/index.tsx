import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · IntellectX Chat` : 'IntellectX Chat';
  }, [title]);

  return null;
});

export default PageTitle;
