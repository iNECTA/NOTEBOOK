import React, { useEffect } from 'react';

function InteractiveNotebook({ notebookText }) {
  useEffect(() => {
    (async function loadThebe() {
      window.addEventListener('thebe-ready', function (evt) {
        let thebe = window.thebe;
        if (thebe) {
          let cells = document.querySelectorAll('.thebe');
          Array.from(cells).forEach((cell) => {
            thebe.bootstrap(cell, { requestKernel: true });
          });
        }
      });

      if (document.readyState === 'complete') {
        let event = document.createEvent('Event');
        event.initEvent('thebe-ready', true, true);
        window.dispatchEvent(event);
      }

      let script = document.createElement('script');
      script.src = 'https://unpkg.com/thebe@latest/lib/index.js';
      script.id = 'thebe-script-tag';
      document.head.appendChild(script);

      await new Promise((r) => setTimeout(r, 2000)); // Wait for script to load

      const thebelab = window.thebelab;

      thebelab.bootstrap({
        kernelOptions: {
          serverSettings: {
            baseUrl: 'https://mybinder.org',
          },
        },
        preRenderHook: (input, preRenderOutput) => preRenderOutput,
        binderOptions: {
          ref: 'master',
          binderUrl: 'https://mybinder.org',
          repo: 'binder-examples/requirements',
        },
        kernelOptionsHandler: (kernelOptions) => kernelOptions,
        codeMirrorConfig: { theme: 'abcdef' },
      });
    })();
  }, []);

  return (
    <div>
      <pre data-executable="true" data-language="python" className="thebe">
        {notebookText}
      </pre>
    </div>
  );
}

export default InteractiveNotebook;
