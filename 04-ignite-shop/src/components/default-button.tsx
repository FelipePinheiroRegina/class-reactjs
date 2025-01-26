import { DefaultButtonContainer } from "@/styles/pages/default-button";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export function DefaultButton({ label, ...props }: Props) {
    return (
        <DefaultButtonContainer {...props}> {label} </DefaultButtonContainer>
    )
}