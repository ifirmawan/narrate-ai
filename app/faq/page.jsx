import jsonFAQ from './faq.json';

const FAQPage = () => {
  return (
    <div className="w-full space-y-8">
      <h1 className="mb-1">FAQ</h1>
      <em>
        Frequently Asked Questions – All You Need to Know About Narrate AI
      </em>
      <div className="w-full card bg-gray-200 text-slate-900">
        <div className="card-body">
          <ul className="list-style-disc space-y-4">
            {jsonFAQ.map((item, index) => (
              <li key={index}>
                <h2 className="font-bold text-lg">{item.question}</h2>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
