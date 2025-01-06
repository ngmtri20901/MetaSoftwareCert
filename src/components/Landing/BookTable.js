import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookTable = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            guests: 1,
            date: "",
            time: "",
        },
        onSubmit: (values) => {
            console.log("Form submitted with values:", values);
            formik.resetForm(); // Reset lại form sau khi gửi
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            phone: Yup.string()
                .matches(
                    /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
                    "Invalid phone number"
                )
                .min(10, "Must be at least 10 digits")
                .max(12, "Maximum 12 digits")
                .required("Phone is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            guests: Yup.number()
                .min(1, "Must have at least 1 guest")
                .max(40, "Maximum 40 guests")
                .required("Number of guests is required"),
            date: Yup.date()
                .required("Date is required")
                .min(new Date(), "Date cannot be in the past"),
            time: Yup.string()
                .matches(
                    /^([01]\d|2[0-3]):([0-5]\d)$/,
                    "Time must be in HH:mm format (e.g., 09:30 or 23:00)"
                )
                .required("Time is required")
                .test(
                    "is-valid-time",
                    "Our restaurant open at 10AM!",
                    (value) => {
                        if (!value) return false; // Nếu không có giá trị thì không cần kiểm tra
                        const [hours, minutes] = value.split(":").map(Number);
                        // Kiểm tra xem giờ có trong khoảng 10:00 (10) đến 23:00 (23) không
                        return hours >= 10 && hours <= 23;
                    }
                ),
        }),
    });


    const incrementGuests = (formik) => {
        const currentGuests = formik.values.guests;
        if (currentGuests < 40) {
            formik.setFieldValue("guests", currentGuests + 1);
        }
    };

    const decrementGuests = (formik) => {
        const currentGuests = formik.values.guests;
        if (currentGuests > 1) {
            formik.setFieldValue("guests", currentGuests - 1);
        }
    };

    const handleMinutesChange = (e) => {
        formik.setFieldValue('minutes', e.target.value);
    };


    return (
        <div className="bg-[#34433E] w-full text-white py-8 px-4 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4">BOOK YOUR TABLE</h2>
            <p className="text-center mb-8 text-gray-400">
                Secure your table and enjoy a perfect meal with us.
            </p>

            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col items-center justify-center bg-[#34433E]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-4">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold">
                                Your name <span className="text-red-500 inline">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ex. John Doe"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md text-gray-800"
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                            ) : null}
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold">
                                Your Phone <span className="text-red-500 inline">*</span>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md text-gray-800"
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                            ) : null}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold">
                                Email <span className="text-red-500 inline">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Ex. abc@email.com"
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md text-gray-800"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-[#34433E]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-4">
                        {/* Guests Field */}
                        <div>
                            <label htmlFor="guests" className="block text-sm font-semibold pb-1.5">
                                Number of Guests <span className="text-red-500 inline">*</span>
                            </label>
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    onClick={() => decrementGuests(formik)}
                                    className="bg-neutral-200 hover:bg-neutral-300 p-2 rounded-l-md text-black"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    value={formik.values.guests}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    min="1"
                                    max="40"
                                    required
                                    className="w-32 sm:w-40 text-center text-neutral-800 py-2 border-t border-b border-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => incrementGuests(formik)}
                                    className="bg-neutral-200 hover:bg-neutral-300 p-2 rounded-r-md text-black"
                                >
                                    +
                                </button>
                            </div>
                            {formik.touched.guests && formik.errors.guests ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.guests}</div>
                            ) : null}
                        </div>

                        {/* Date Field */}
                        <div>
                            <label htmlFor="date" className="block text-sm font-semibold">
                                Date <span className="text-red-500 inline">*</span>
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md text-gray-800"
                            />
                            {formik.touched.date && formik.errors.date ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.date}</div>
                            ) : null}
                        </div>

                        {/* Time Field */}
                        <div className="relative">
                            <label htmlFor="time" className="block text-sm font-semibold">
                                Time <span className="text-red-500 inline">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    min="09:00"
                                    max="23:00"
                                    value={formik.values.time}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md text-gray-800"
                                />
                                <div className="absolute top-1/2 right-3 transform -translate-y-1/3 text-gray-500 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5"
                                    >
                                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 14.93V12a1 1 0 0 0-.29-.71L10 9.59a1 1 0 0 1 1.41-1.41l2 2V6a1 1 0 0 1 2 0v6a1 1 0 0 1-.29.71l-2.41 2.41Z" />
                                    </svg>
                                </div>
                            </div>
                            {formik.touched.time && formik.errors.time ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.time}</div>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-1/2 sm:w-1/4 mx-auto py-2 bg-yellow-400 text-white font-bold rounded-md mt-4 hover:bg-yellow-500 transition-colors"
                    >
                        Reserve Now
                    </button>
                </div>
            </form>
        </div>

    );
};

export default BookTable;
