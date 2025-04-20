"use client";

import { membershipPlans } from "@/utils";
import CommonCard from "../common-card";
import JobIcon from "../job-icon";
import { Button } from "../ui/button";
import { updateProfileAction } from "@/actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Membership({ profileInfo }) {
  const pathName = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");

  async function handlePayment(getCurrentPlan) {
    sessionStorage.setItem("currentPlan", JSON.stringify(getCurrentPlan));

    // Set your image path or URL here
    setPopupImage("https://docs.google.com/forms/d/e/1FAIpQLSdx9bjF9iQ4ylM7GhSshzU3gndqj0yQkLmScJbFrGd2eqwrNQ/viewform?usp=header"); // Replace with your image URL or QR code
    setShowPopup(true);
  }

  async function updateProfile() {
    const fetchCurrentPlanFromSessionStorage = JSON.parse(
      sessionStorage.getItem("currentPlan")
    );

    const duration =
      fetchCurrentPlanFromSessionStorage?.type === "basic"
        ? 1
        : fetchCurrentPlanFromSessionStorage?.type === "teams"
        ? 2
        : 5;

    await updateProfileAction(
      {
        ...profileInfo,
        isPremiumUser: true,
        memberShipType: fetchCurrentPlanFromSessionStorage?.type,
        memberShipStartDate: new Date().toString(),
        memberShipEndDate: new Date(
          new Date().getFullYear() + duration,
          new Date().getMonth(),
          new Date().getDate()
        ),
      },
      "/membership"
    );
  }

  useEffect(() => {
    if (pathName.get("status") === "success") updateProfile();
  }, [pathName]);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline dark:border-white justify-between border-b pb-6 pt-24">
        <h1 className="text-4xl font-bold dark:text-white tracking-tight text-gray-950">
          {profileInfo?.isPremiumUser
            ? "You are a premium user"
            : "Choose Your Best Plan"}
        </h1>
        <div>
          {profileInfo?.isPremiumUser ? (
            <Button className="flex h-11 items-center justify-center px-5">
              {
                membershipPlans.find(
                  (planItem) => planItem.type === profileInfo?.memberShipType
                )?.heading
              }
            </Button>
          ) : null}
        </div>
      </div>

      <div className="py-20 pb-24 pt-6">
        <div className="container mx-auto p-0 space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {membershipPlans.map((plan, index) => (
              <CommonCard
                key={plan.type}
                icon={
                  <div className="flex justify-between">
                    <div>
                      <JobIcon />
                    </div>
                    <h1 className="font-bold text-2xl">{plan.heading}</h1>
                  </div>
                }
                title={`$ ${plan.price} /yr`}
                description={plan.type}
                footerContent={
                  profileInfo?.memberShipType === "enterprise" ||
                  (profileInfo?.memberShipType === "basic" && index === 0) ||
                  (profileInfo?.memberShipType === "teams" &&
                  index >= 0 &&
                  index < 2 ? null : (
                    <Button
                      onClick={() => handlePayment(plan)}
                      className="disabled:opacity-65 dark:bg-[#fffa27] flex h-11 items-center justify-center px-5"
                    >
                      {profileInfo?.memberShipType === "basic" ||
                      profileInfo?.memberShipType === "teams"
                        ? "Update Plan"
                        : "Get Premium"}
                    </Button>
                  ))
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
    onClick={() => setShowPopup(false)}
  >
    <div
      className="relative bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full h-[75%]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-4 text-3xl font-bold text-gray-500 hover:text-black"
        onClick={() => setShowPopup(false)}
      >
        ×
      </button>
      <iframe
        src={popupImage}
        alt="Payment QR / Instructions"
        className="rounded-lg w-full h-full object-contain scale-10"
      />
    </div>
  </div>
)}

    </div>
  );
}

export default Membership;
