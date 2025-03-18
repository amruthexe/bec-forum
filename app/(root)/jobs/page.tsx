"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <section className="py-20 text-light-900 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center">
          <h2 className="text-4xl font-medium text-dark400_light800 sm:text-5xl">
            Report Issue
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-dark300_light700">
            Please provide the details of the issue you&apos;re facing. If necessary, upload relevant images to help us better understand your problem.
          </p>
        </div>

        {/* Report Form Section */}
        <div className="mt-16">
          <div className="p-8 text-center bg-neutral-900 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-500">Report Issue</h3>
            <p className="mt-2 text-white">
              Fill out the form below and upload images if necessary.
            </p>

            {isSubmitted ? (
              <div className="mt-6 text-center">
                <h3 className="text-xl font-medium text-red-500">
                  🎉 Report Submitted!
                </h3>
                <p className="mt-2 text-light-500">
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
                    className="w-full p-3 mt-2 text-white bg-neutral-800 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white">Issue Title *</label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="Enter the title of the issue"
                    className="w-full p-3 mt-2 text-white bg-neutral-800 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white">Description *</label>
                  <textarea
                    name="description"
                    required
                    placeholder="Describe the issue in detail"
                    className="w-full p-3 mt-2 text-white bg-neutral-800 rounded-lg focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white">Upload Images *</label>
                  <input
                    type="file"
                    name="images"
                    accept="image/*"
                    className="w-full p-3 mt-2 text-white bg-neutral-800 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 font-bold text-black transition bg-red-500 rounded-lg hover:bg-orange-600 hover:font-medium"
                >
                  Submit Report
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-orange-500">Meet The Team Behind This Project</h3>
        <p className="mt-4 text-white">
          This website was developed by a team of passionate individuals under the guidance of the HOD of Information Technology.
        </p>

        {/* HOD Section */}
        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center">
            <Image src="/assets/images/t1.jpg" alt="Project Guide" width={96} height={96} className="rounded-full border-4 border-gray-700" />
            <p className="mt-2 text-white">Project Guide: Dr. N. Sivaram Prasad</p>
            <p className="text-light-500">(HOD, Information Technology)</p>
            <p className="text-orange-500">Contact: hodit@becbapatla.ac.in</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 sm:flex-col md:flex-row">
          {[
            { name: "Amruth Raj", role: "Full Stack Developer", img: "S1.jpg", portfolio: "https://amruthexe.vercel.app/" },
            { name: "Srinivas", role: "Backend Developer", img: "s2.jpeg", portfolio: "https://saisrininvas9.vercel.app/" },
            { name: "Karthik", role: "Frontend Developer", img: "s3.png", portfolio: "https://karthik7.vercel.app/" },
            { name: "Mahesh", role: "Designer", img: "s4.jpg", portfolio: "https://student4portfolio.com" }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={`/assets/images/${member.img}`} alt={member.name} width={96} height={96} className="rounded-full border-4 border-gray-700" />
              <p className="mt-2 text-white">{member.name}</p>
              <p className="text-light-500">Role: {member.role}</p>
              <p className="text-orange-500">
                Portfolio: <Link href={member.portfolio} target="_blank" className="underline">Link</Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Section */}
      <div className="text-center mt-10">
        If You Are an Admin,{" "}
        <Link className="font-bold text-orange-500" href="https://dashboard.clerk.com/sign-in?sign_in_force_redirect_url=https%3A%2F%2Fdashboard.clerk.com%2F&redirect_url=https%3A%2F%2Fclerk.com%2F">
          Click Here
        </Link>
      </div>
    </section>
  );
}
