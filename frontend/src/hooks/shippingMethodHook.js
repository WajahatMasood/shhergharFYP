import React, { Fragment, useRef, useState, useEffect } from "react";

export const useshippingOTPHook = () => {


const sendShippingOTP = async(email) =>{
const respo = await fetch(`/api/v1/shippingotp`, {
    method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email
        })
})

const response =  await respo.json()
return response.OTP
}


return {sendShippingOTP}
}