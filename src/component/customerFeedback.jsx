import profile from '../assets/OIP.jpeg'

function CustomerFeedback() {
  const feedbacks = [
    { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service.', rating: 5 },
    { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.', rating: 4 },
    { name: 'Devon Lane', feedback: 'Normally wings are wings, but theirs are lean meaty and tender.', rating: 5 },
    { name: 'Devon Lane', feedback: 'Normally wings are wings, but theirs are lean meaty and tender.', rating: 5 },
    { name: 'Devon Lane', feedback: 'Normally wings are wings, but theirs are lean meaty and tender.', rating: 5 },
  ];

  return (
    <section className="p-4 bg-light_black rounded-lg h-[500px]  overflow-y-auto custom-scrollbar">
      <h2>Customer Feedback</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index} className="border-b border-gray-700 py-2">
            <span className='flex gap-2 items-center'>
            <img src={profile} alt="profile" className='w-10 h-10 rounded-full'/>
            <p className="font-semibold">{feedback.name}</p>
            </span>
            
            {[...Array(feedback.rating)].map((_, i) => (
              <span key={i} role="img" aria-label="star">⭐</span>
            ))}

            <p>{feedback.feedback}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CustomerFeedback;
