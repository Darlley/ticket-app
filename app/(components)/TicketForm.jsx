'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';

const startingTicketData = {
  title: 'ok',
  description: '',
  category: 'Hardware Problem',
  priority: 1,
  status: 'not started',
  active: true,
};

export default function TicketForm() {
  const router = useRouter();
  const { register, handleSubmit, watch, control } = useForm({
    defaultValues: startingTicketData,
  });
  const watchData = useWatch({ control });

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify(data),
      "content-type": "application/json"
    })

    if(!response.ok){
      throw new Error("Failed to create Ticket")
    }

    router.refresh()
    router.push('/')
  }

  return (
    <div className="flex justify-center flex-col p-4 md:p-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-6 mx-auto w-full md:max-w-lg"
      >
        <div className="space-y-14">
          <div>
            <h3>Create Your Ticket</h3>
            <p>Create Your Ticket</p>
          </div>

          <div className="relative">
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Ticket Title"
              required
              {...register('title')}
              className="relative w-full h-10 px-4 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 invalid:focus:border-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="title"
              className="cursor-pointer peer-focus:cursor-default peer-autofill:-top-6 absolute left-0 -top-6 z-[1] px-0 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-0 peer-focus:px-0 peer-focus:-top-6 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent peer-focus:text-sm peer-focus:text-emerald-500"
            >
              Title
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-invalid:stroke-pink-500 peer-invalid:peer-focus:stroke-pink-500 peer-focus:stroke-emerald-500 peer-disabled:cursor-not-allowed"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-3 description-3"
              role="graphics-symbol"
            >
              <title id="title-3">Check mark icon</title>
              <desc id="description-3">icon description here</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
              <span>Text field with helper text</span>
              <span className="text-slate-500">1/10</span>
            </small>
          </div>

          <div className="relative">
            <textarea
              type="text"
              {...register('description')}
              required
              placeholder="Description"
              className="relative w-full p-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            ></textarea>
            <label
              for="id-l07"
              className="cursor-text peer-focus:cursor-default absolute left-0 -top-6 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:px-0 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Description
            </label>
            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
              <span> Text field with helper text </span>
              <span className="text-slate-500"> 1/10 </span>
            </small>
          </div>

          <div className="relative">
            <select
              {...register('category')}
              required
              id="category"
              className="relative w-full h-12 px-4 transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" selected></option>
              <option value="Hardware Problem">Hardware Problem</option>
              <option value="Software Problem">Software Problem</option>
              <option value="Network Problem">Network Problem</option>
            </select>
            <label
              htmlFor="category"
              className="cursor-pointer absolute -top-6 left-0 z-[1] px-0 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-6 peer-valid:text-sm peer-focus:px-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Selecionar categoria
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute top-3.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-labelledby="title-11 description-11"
              role="graphics-symbol"
            >
              <title id="title-11">Arrow Icon</title>
              <desc id="description-11">Arrow icon of the select list.</desc>
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400">
              <span>Text field with helper text</span>
            </small>
          </div>

          <div className="relative">
            <input
              type="number"
              placeholder="Priority"
              required
              id="priority"
              {...register('priority')}
              className="relative w-full h-10 px-4 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 invalid:focus:border-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="priority"
              className="cursor-pointer peer-focus:cursor-default peer-autofill:-top-6 absolute left-0 -top-6 z-[1] px-0 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-0 peer-focus:px-0 peer-focus:-top-6 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent peer-focus:text-sm peer-focus:text-emerald-500"
            >
              Priority
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-invalid:stroke-pink-500 peer-invalid:peer-focus:stroke-pink-500 peer-focus:stroke-emerald-500 peer-disabled:cursor-not-allowed"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>

            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
              <span>Text field with helper text</span>
              <span className="text-slate-500">1/10</span>
            </small>
          </div>

          <div className="relative">
            <select
              {...register('status')}
              id="status"
              required
              className="relative w-full h-12 px-4 transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" selected></option>
              <option value="not started">Not Started</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <label
              htmlFor="status"
              className="cursor-pointer absolute -top-6 left-0 z-[1] px-0 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-6 peer-valid:text-sm peer-focus:px-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Select Status
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute top-3.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-labelledby="title-11 description-11"
              role="graphics-symbol"
            >
              <title id="title-11">Arrow Icon</title>
              <desc id="description-11">Arrow icon of the select list.</desc>
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400">
              <span>Text field with helper text</span>
            </small>
          </div>

          <div className="relative flex flex-wrap items-center">
            <input
              className="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
              type="checkbox"
              {...register('active')}
              id="active"
            />
            <label
              className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
              htmlFor="active"
            >
              Activate
            </label>
            <small className="w-full py-2 pl-6 text-xs transition text-slate-400 peer-invalid:text-pink-500">
              <span>Checkbox can also have helper text</span>
            </small>
            <svg
              className="absolute left-0 w-4 h-4 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              aria-labelledby="title-3 description-3"
              role="graphics-symbol"
            >
              <title id="title-3">Check mark icon</title>
              <desc id="description-3">
                Check mark icon to indicate whether the radio input is checked
                or not.
              </desc>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
              />
            </svg>
          </div>
        </div>

        <button type="submit" className="mt-12">
          Criar
        </button>
      </form>
      <p>Os dados do formulário são: {JSON.stringify(watchData)}</p>
    </div>
  );
}
