import { ComponentStyleProps } from "@/utils/types/ComponentStyleProps"


const Footer = ({className}: ComponentStyleProps) => {
    // console.log("footer")
    return(
        <><div className={`footer ${className}`}>© Ceridwen Roberts 2024</div>
        </>
    )
}

export default Footer