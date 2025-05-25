const SliderTwo = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row w-full my-6 rounded-lg px-6 md:px-12 lg:px-20 py-12">
      {/* Text Section */}
      <div className="lg:pr-16 flex flex-col justify-center lg:w-3/5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#EC8426] font-serif  mb-4">
          Consulting Services
        </h1>
        <h4 className="text-lg sm:text-xl text-slate-800 font-semibold mb-2">
          Streamline Source-to-Pay Process with SAP Ariba
        </h4>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-6">
          The SAP Ariba platform offers an intuitive procurement solution that provides timely insights to boost compliance and support smarter buying and organizational decision-making. With SAP Ariba, both buyers and suppliers gain complete visibility into the source-to-pay process.
        </p>
        <div>
          <button className="bg-[#EC8426] hover:bg-[#d46f1f] text-white px-6 py-3 rounded-full font-serif text-base sm:text-lg">
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-8 lg:mt-0 lg:w-2/5 shrink-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="card-image"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default SliderTwo;
