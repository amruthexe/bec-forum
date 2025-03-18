  "use client";
  import Link from 'next/link'
  import { useState } from "react";

  export default function Report() {
      const [isSubmitted, setIsSubmitted] = useState(false);

      const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.currentTarget;

          fetch("https://getform.io/f/amdkggxb", {
              method: "POST",
              body: new FormData(form),
          })
              .then((response) => {
                  if (response.ok) {
                      setIsSubmitted(true);
                      form.reset();
                  } else {
                      alert("Something went wrong. Please try again.");
                  }
              })
              .catch(() => alert("An error occurred. Please try again later."));
      };

      return (
          <section className="py-20 sm:py-24 text-light-900">
              <div className="container px-4 sm:px-6 lg:px-8">
                  {/* Page Title */}
                  <div className="text-center">
                      <h2 className="text-4xl sm:text-5xl font-medium text-dark400_light800">
                          Report Issue
                      </h2>
                      <p className="text-dark300_light700 mt-4 max-w-2xl mx-auto">
                          Please provide the details of the issue you're facing. If necessary, upload relevant images to help us better understand your problem.
                      </p>
                  </div>

                  {/* Report Form Section */}
                  <div className="mt-16">
                      <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-center">
                          <h3 className="text-2xl font-bold text-orange-500">Report Issue</h3>
                          <p className="text-white mt-2">
                              Fill out the form below and upload images if necessary.
                          </p>

                          {isSubmitted ? (
                              <div className="text-center mt-6">
                                  <h3 className="text-xl font-medium text-red-500">
                                      🎉 Report Submitted!
                                  </h3>
                                  <p className="text-light-500 mt-2">
                                      Thank you for your report! We will look into it and get back to you soon.
                                  </p>
                              </div>
                          ) : (
                              <form onSubmit={handleFormSubmit} className="mt-6 text-left">
                                  <div className="mb-4">
                                      <label className="block text-sm font-medium text-white">Username *</label>
                                      <input
                                          type="text"
                                          name="username"
                                          required
                                          placeholder="Enter the username you want to report"
                                          className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                      />
                                  </div>
                                  <div className="mb-4">
                                      <label className="block text-sm font-medium text-white">Issue Title *</label>
                                      <input
                                          type="text"
                                          name="title"
                                          required
                                          placeholder="Enter the title of the issue"
                                          className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                      />
                                  </div>
                                  <div className="mb-4">
                                      <label className="block text-sm font-medium text-white">Description *</label>
                                      <textarea
                                          name="description"
                                          required
                                          placeholder="Describe the issue in detail"
                                          className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
                                      ></textarea>
                                  </div>
                                  <div className="mb-4">
                                      <label className="block text-sm font-medium text-white">Upload Images *</label>
                                      <input
                                          type="file"
                                          name="images"
                                          accept="image/*"
                                          className="w-full mt-2 p-3 bg-neutral-800 rounded-lg text-white"
                                      />
                                  </div>
                                  <button type="submit" className="w-full py-3 bg-red-500 font-bold text-black hover:font-medium rounded-lg hover:bg-orange-600 transition">
                                      Submit Report
                                  </button>
                              </form>
                          )}
                      </div>
                  </div>
              </div>

              {/* Admin Link */}
              
              {/* Rules Section */}
              <div className="text-center mt-16">
                  <h3 className="text-xl font-bold text-orange-500">Forum Rules</h3>
                  <p className="text-white mt-4 max-w-2xl mx-auto">
                      Please adhere to the following rules while posting:
                  </p>
                  <ul className="list-disc text-left text-white mt-4 mx-auto max-w-lg">
                      <li>🚫 No spam questions! Please make sure your question is relevant and meaningful.</li>
                      <li>🧑‍🎓 Be respectful to others. Treat everyone with kindness and courtesy.</li>
                      <li>📚 Provide detailed descriptions when asking questions to help others understand your issue.</li>
                      <li>🖼️ Only upload relevant images that support your issue, and ensure they are clear.</li>
                      <li>⚖️ Follow the college's code of conduct while posting questions and answers.</li>
                      <li>🛑 No inappropriate content. Maintain professionalism and stay within the boundaries of the academic environment.</li>
                      <li>🧑‍💻 Only ask questions that contribute to learning. Avoid irrelevant or off-topic queries.</li>
                      <li>🔄 Keep the discussions constructive and help others where possible.</li>
                      <li>💬 Stay within the scope of the subject matter. Refrain from discussing unrelated topics.</li>
                  </ul>

                  {/* Goal Section */}
                  <div className="mt-8">
                      <h4 className="text-lg font-medium text-orange-500">Our Goal: Health Coverage Supported</h4>
                      <p className="text-white mt-2">
                          We aim to foster a space where students can engage, ask relevant questions, and help each other in achieving well-being.
                      </p>
                  </div>
              </div>

              {/* Team Section */}
              <div className="mt-16 text-center">
    <h3 className="text-xl font-bold text-orange-500">Meet The Team Behind This Project</h3>
    <p className="text-white mt-4">
        This website was developed by a team of passionate individuals under the guidance of the HOD of Information Technology.
    </p>

    {/* HOD Section - Single Person at the Top */}
    <div className="flex justify-center mt-8">
        <div className="flex flex-col items-center">
            <img src="assets/images/t1.jpg" alt="Project Guide" className="rounded-full w-24 h-24 border-4 border-gray-700" />
            <p className="text-white mt-2">Project Guide: Dr. N. Sivaram Prasad</p>
            <p className="text-light-500">(HOD, Information Technology)</p>
            <p className="text-orange-500">Contact: hodit@becbapatla.ac.in</p>
        </div>
    </div>

    {/* Student Team Members - Displayed in Next Row */}
    <div className="flex flex-wrap justify-center mt-8 gap-8 sm:flex-col md:flex-row">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
            <img src="assets/images/S1.jpg" alt="Student 1" className="rounded-full w-24 h-24 border-4 border-gray-700" />
            <p className="text-white mt-2">Amruth Raj</p>
            <p className="text-light-500">Role: Full Stack Developer</p>
            <p className="text-orange-500">
                Portfolio: <Link href="https://amruthexe.vercel.app/" target="_blank" className="underline">Link</Link>
            </p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
            <img src="assets/images/s2.jpeg" alt="Student 2" className="rounded-full w-24 h-24 border-4 border-gray-700" />
            <p className="text-white mt-2">Srinivas</p>
            <p className="text-light-500">Role: Backend Developer</p>
            <p className="text-orange-500">
                Portfolio: <Link href="https://saisrininvas9.vercel.app/" target="_blank" className="underline">Link</Link>
            </p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
            <img src="assets/images/s3.png" alt="Student 3" className="rounded-full w-24 h-24 border-4 border-gray-700" />
            <p className="text-white mt-2">Karthik</p>
            <p className="text-light-500">Role: Frontend Developer</p>
            <p className="text-orange-500">
                Portfolio: <Link href="https://karthik7.vercel.app/" target="_blank" className="underline">Link</Link>
            </p>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col items-center">
            <img src="assets/images/s4.jpg" alt="Student 4" className="rounded-full w-24 h-24 border-4 border-gray-700" />
            <p className="text-white mt-2">Mahesh</p>
            <p className="text-light-500">Role: Designer</p>
            <p className="text-orange-500">
                Portfolio: <Link href="https://student4portfolio.com" target="_blank" className="underline">Link</Link>
            </p>
        </div>
    </div>
    <div className="text-center mt-10">
                  If You Are an Admin, <Link className="text-orange-500 font-bold" href="https://dashboard.clerk.com/sign-in?sign_in_force_redirect_url=https%3A%2F%2Fdashboard.clerk.com%2F&redirect_url=https%3A%2F%2Fclerk.com%2F">Click Here</Link>
              </div>

</div>

          </section>
      );
  }
