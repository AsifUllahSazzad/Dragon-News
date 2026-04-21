const Register = () => {
    return (
         <div className="min-h-screen flex justify-center items-center">
  <div className="bg-base-100 w-full max-w-xl p-10">
    <div className="card-body">
      <h1 className="text-center text-[#403F3F] font-semibold text-4xl mb-2">
        Register your account
      </h1>

      <div className="border-t w-full my-6 text-[#E7E7E7]"></div>

      <form className="fieldset">
        <label className="label text-lg font-semibold text-[#403F3F]">Your Name</label>
        <input type="text" className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]" placeholder="Enter your name" />

        <label className="label text-lg font-semibold text-[#403F3F]">Photo URL</label>
        <input type="email" className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]" placeholder="Enter your photo url" />

        <label className="label text-lg font-semibold text-[#403F3F]">Email</label>
        <input type="email" className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]" placeholder="Enter your email address" />

        <label className="label text-lg font-semibold text-[#403F3F]">Password</label>
        <input type="password" className="input w-full bg-[#F3F3F3] placeholder:text-[#9F9F9F]" placeholder="Enter your password" />



        <button className="btn btn-neutral mt-4">Register</button>
      </form>
    </div>

  </div>
</div>
    );
};

export default Register;