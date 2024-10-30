import { getNetlifyContext } from 'utils';
import { Alert } from './alert';
import { Markdown } from './markdown';

const noNetlifyContextAlert = `
This app is not production-ready and is intended solely as a demonstration of how Mistral AI can be utilized for content creation.
`;

export function ContextAlert(props) {
  const { addedChecksFunction } = props;
  const ctx = getNetlifyContext();

  let markdownText = null;
  if (!ctx) {
    markdownText = noNetlifyContextAlert;
  } else if (addedChecksFunction) {
    markdownText = addedChecksFunction(ctx);
  }

  if (markdownText) {
    return (
      <Alert>
        <Markdown content={markdownText} />
      </Alert>
    );
  } else {
    return <></>;
  }
}
