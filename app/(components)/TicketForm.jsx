'use client';

import { RadioGroup } from '@headlessui/react';
import { Plus } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';

const categories = ['Hardware Problem', 'Software Problem', 'Project'];
const statusList = ['not started', 'started', 'done'];

const startingTicketData = {
  title: 'New Ticket',
  description: '',
  category: categories[2],
  priority: 1,
  status: statusList[0],
  progress: 0,
  active: false,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TicketForm() {
  const router = useRouter();
  const { register, handleSubmit, watch, control, setValue } = useForm({
    defaultValues: startingTicketData,
  });
  const watchData = useWatch({ control });

  const category = useWatch({
    control,
    name: 'category'
  });

  const selectedStatus = useWatch({
    control,
    name: 'status'
  });

  async function onSubmit(data) {
    const response = await fetch('http://localhost:3000/api', {
      method: 'POST',
      body: JSON.stringify(data),
      'content-type': 'application/json',
    });

    if (!response.ok) {
      throw new Error('Failed to create Ticket');
    }

    router.refresh();
    router.push('/');
  }

  return (
    <div className="flex justify-center flex-col p-4 md:p-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-6 mx-auto w-full md:max-w-lg"
      >
        <div className="flex flex-col gap-4">
          <div className="my-4">
            <h3>Create Your Ticket</h3>
            <p>Create Your Ticket</p>
          </div>

          {/* Title */}
          <div className="relative my-4">
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Ticket Title"
              required
              {...register('title')}
              className="relative w-full h-10 px-4 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-red-500 invalid:text-red-500 invalid:focus:border-red-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="title"
              className="cursor-pointer peer-focus:cursor-default peer-autofill:-top-6 absolute left-0 -top-6 z-[1] px-0 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:left-0 peer-focus:px-0 peer-focus:-top-6 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent peer-focus:text-sm peer-focus:text-emerald-500"
            >
              Title
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-invalid:stroke-red-500 peer-invalid:peer-focus:stroke-red-500 peer-focus:stroke-emerald-500 peer-disabled:cursor-not-allowed"
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
            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-red-500">
              <span>Text field with helper text</span>
              <span className="text-slate-500">1/10</span>
            </small>
          </div>

          {/* Description */}
          <div className="relative my-4">
            <textarea
              type="text"
              {...register('description')}
              required
              placeholder="Description"
              className="relative w-full p-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-red-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            ></textarea>
            <label
              htmlFor="id-l07"
              className="cursor-text peer-focus:cursor-default absolute left-0 -top-6 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:px-0 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-emerald-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Description
            </label>
            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-red-500">
              <span> Text field with helper text </span>
              <span className="text-slate-500"> 1/10 </span>
            </small>
          </div>

          {/* Category */}
          <div className="my-4">
            <span className="text-sm text-gray-400 mb-2 inline-block">
              Category
            </span>
            <RadioGroup
              value={category}
              onChange={(category) => setValue('category', category)}
            >
              <RadioGroup.Label className="sr-only">
                Pricing plans
              </RadioGroup.Label>
              <div className="relative  -space-y-px rounded-md bg-white">
                {categories.map((category, index) => (
                  <RadioGroup.Option
                    key={category}
                    value={category}
                    className={({ checked }) =>
                      classNames(
                        index === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                        index === categories.length - 1
                          ? 'rounded-bl-md rounded-br-md'
                          : '',
                        checked
                          ? 'z-10 border-blue-200 bg-blue-500'
                          : 'border-gray-400',
                        'relative flex cursor-pointer flex-col border p-4 focus:outline-none md:grid md:grid-cols-3 md:pl-4 md:pr-6'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <span className="flex items-center text-sm">
                          <span
                            className={classNames(
                              checked
                                ? 'bg-blue-600 border-transparent'
                                : 'bg-white border-gray-300',
                              active
                                ? 'ring-2 ring-offset-2 ring-blue-300'
                                : '',
                              'h-4 w-4 rounded-full border flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                          </span>
                          <RadioGroup.Label
                            as="span"
                            className={classNames(
                              checked ? 'text-blue-100' : 'text-gray-600',
                              'ml-3 font-medium'
                            )}
                          >
                            {category}
                          </RadioGroup.Label>
                        </span>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Status */}
          <div className="my-4">
            <span className="text-sm text-gray-400 mb-2 inline-block">
              Status
            </span>
            <RadioGroup
              value={selectedStatus}
              onChange={(status) => setValue('status', status)}
            >
              <RadioGroup.Label className="sr-only">
                Pricing plans
              </RadioGroup.Label>
              <div className="relative  -space-y-px rounded-md bg-white">
                {statusList.map((statusName, index) => (
                  <RadioGroup.Option
                    key={statusName}
                    value={statusName}
                    className={({ checked }) =>
                      classNames(
                        index === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                        index === statusList.length - 1
                          ? 'rounded-bl-md rounded-br-md'
                          : '',
                        checked
                          ? 'z-10 border-blue-200 bg-blue-500'
                          : 'border-gray-400',
                        'relative flex cursor-pointer flex-col border p-4 focus:outline-none md:grid md:grid-cols-3 md:pl-4 md:pr-6'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <span className="flex items-center text-sm">
                          <span
                            className={classNames(
                              checked
                                ? 'bg-blue-600 border-transparent'
                                : 'bg-white border-gray-300',
                              active
                                ? 'ring-2 ring-offset-2 ring-blue-300'
                                : '',
                              'h-4 w-4 rounded-full border flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                          </span>
                          <RadioGroup.Label
                            as="span"
                            className={classNames(
                              checked ? 'text-blue-100' : 'text-gray-600',
                              'ml-3 font-medium'
                            )}
                          >
                            {statusName}
                          </RadioGroup.Label>
                        </span>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Priority */}
          <div className="my-4">
            <label
              htmlFor="priority"
              className="mb-2 cursor-pointer text-sm text-slate-400 peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent peer-focus:text-emerald-500 peer-valid:text-emerald-500"
            >
              Priority
            </label>
            <input
              min="1"
              max="5"
              type="range"
              {...register('priority', { valueAsNumber: true })}
              id="priority"
              className="accent-blue-500 w-full"
            />
          </div>

          {/* Progress */}
          <div className="my-4">
            <label
              htmlFor="progress"
              className="mb-2 cursor-pointer text-sm text-slate-400 peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent peer-focus:text-emerald-500 peer-valid:text-emerald-500"
            >
              Progress
            </label>
            <input
              min="0"
              max="100"
              type="range"
              {...register('progress', { valueAsNumber: true })}
              id="progress"
              className="accent-blue-500 w-full"
            />
          </div>

          {/* Active */}
          <div className="my-4 relative flex flex-wrap items-center">
            <input
              className="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-blue-500 checked:bg-blue-500 checked:hover:border-blue-600 checked:hover:bg-blue-600 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-700 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
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
            <small className="w-full py-2 pl-6 text-xs transition text-slate-400 peer-invalid:text-red-500">
              <span>Seu ticket será ativado automaticamente após a criação</span>
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
              />
            </svg>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex my-6 items-center justify-center gap-x-2 rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-blue-200 shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full transition-colors hover:shadow-2xl"
        >
          Create Ticket
          <Plus size={20} className='text-blue-400' weight="bold"  />
        </button>
      </form>
      <p>Os dados do formulário são: {JSON.stringify(watchData)}</p>
    </div>
  );
}
