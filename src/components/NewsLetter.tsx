//

const NewsLetter = () => {
  return (
    <div className='bg-gray-200'>
      <div className=''>
        <h1 className=''>Join Our Newsletter</h1>
        <p className=''>Sign up for deals, new products and promotions</p>
      </div>
      <div className=''>
        <form>
          <span>
            <input type='email' placeholder='Email address' />
          </span>
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
