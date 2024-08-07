import profile from '../assets/OIP.jpeg'

function RecentOrders() {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  return (
    <section className="w-screen  bg-light_black rounded-lg overflow-auto h-[500px]  custom-scrollbar ">
    <h2 className="text-white text-xl mb-4 sticky top-0 bg-light_black w-full">Recent Orders</h2>
    <table className="w-full text-left text-white border-collapse">
      <thead className='sticky top-6 bg-light_black'>
        <tr >
          <th className="border-b-2 border-gray-600 p-2">Customer</th>
          <th className="border-b-2 border-gray-600 p-2">Order No.</th>
          <th className="border-b-2 border-gray-600 p-2">Amount</th>
          <th className="border-b-2 border-gray-600 p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index} className="border-b border-gray-600 ">
            <span className='flex items-center gap-2 py-2 object-contain'>
            <img src={profile} alt="profile" className='w-10 h-auto  rounded-full'/>
            <td className="p-2">{order.customer}</td>
            </span>
         
            <td className="p-2">{order.orderNo}</td>
            <td className="p-2">{order.amount}</td>
            <td className={`p-2 `}><span className={`rounded-full ${order.status=='Delivered'?'text-green-500 bg-[#175246] px-4':'text-red-500 bg-[#5B383C] px-4'}`}>{order.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  
  );
}

export default RecentOrders;
