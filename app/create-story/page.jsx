'use client';

import { useCallback, useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import { createStory } from 'actions/mistral-ai';

const CreateStory = () => {
  const [generating, setGenerating] = useState(false);
  const [results, setResults] = useState({});
  const [values, setValues] = useState({});
  const [copySuccess, setCopySuccess] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const onSubmit = useCallback(async () => {
    if (values?.story?.trim()?.length) {
      setGenerating(true);
      try {
        const token = await executeRecaptcha(`create_story-${Date.now()}`);
        const verify = await fetch(
          'https://www.google.com/recaptcha/api/siteverify',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              secret: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
              response: token
            })
          }
        );
        const resVerify = verify.json();
        console.log('resVerify', resVerify);
        if (resVerify?.success) {
          const res = await createStory(values.story);
          const json = JSON.parse(res);
          if (typeof json === 'object') {
            setResults(json);
          }
        }
        setGenerating(false);
      } catch (err) {
        console.error(err);
        setGenerating(false);
      }
    }
  }, [executeRecaptcha, values?.story]);

  const onCopy = () => {
    if (results?.output) {
      navigator.clipboard.writeText(results.output);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 lg:flex-row justify-between relative">
      <div className="w-full xl:w-7/12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="w-full flex flex-col justify-center align-center gap-4 mb-6"
        >
          <textarea
            name="story"
            className="textarea textarea-primary text-black"
            placeholder="Write Your Key Points or Context here"
            onChange={(e) => {
              setValues({
                ...values,
                story: e.target.value
              });
            }}
            value={values?.story}
          />
          <div className="w-full flex flex-row justify-end align-center">
            <button type="submit" className="btn btn-lg btn-secondary">
              {generating ? (
                <>
                  <span className="loading loading-spinner loading-xs" />
                  {` Generating`}
                </>
              ) : (
                <>✨{` Generate`}</>
              )}
            </button>
          </div>
        </form>
        <div className="w-full card bg-gray-200 text-slate-900">
          <div className="card-body space-y-3">
            <h3 className="card-title">Results</h3>
            <p>{results?.output}</p>
            <div className="w-full flex flex-row justify-between">
              <span>{`Generated at: ${results?.created_at || '-'}`}</span>
              <span>
                <em>Duration: {results?.duration}</em>
              </span>
            </div>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-outline btn-primary">Share</button> */}
              <button className="btn btn-primary" onClick={onCopy}>
                Copy
              </button>
            </div>
          </div>
        </div>
        {copySuccess && (
          <div className="toast z-50">
            <div className="alert alert-info">
              <span>The story been copied to the clipboard</span>
            </div>
          </div>
        )}
      </div>
      <div className="w-full xl:w-4/12">
        <div className="w-full sticky top-10 right-0">
          <h2 className="text-xl font-bold mb-3">
            How to Use It – Follow These Steps:{' '}
          </h2>
          <ol className="list-decimal">
            <li>
              <strong>Create Story</strong>
              <br />
              <p>
                Start a new project and let Narrate AI know what type of content
                you need.
              </p>
            </li>
            <li>
              <strong>Add Your Key Points or Context</strong>
              <br />
              <p>
                Input the main points or a brief summary to give Narrate AI
                direction.
              </p>
            </li>
            <li>
              <strong>Generate</strong>
              <br />
              <p>
                Let the AI work its magic! In moments, you&apos;ll have a fully
                written draft.
              </p>
            </li>
            <li>
              <strong>Share or Copy</strong>
              <br />
              <p>
                Review your generated content, make any tweaks you like, and
                then share or copy it.
              </p>
            </li>
            <li>
              <strong>Done!</strong>
              <br />
              <p>Enjoy your new, effortlessly created content.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
