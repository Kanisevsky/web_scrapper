"use client"
import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazoneProductURl = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname;
    if(hostname.includes("amazon.co.uk") || hostname.includes("amazon.") || hostname.includes("amazon")) {
      return true
    }

    return false
  } catch (error) {
    return false
  }
}

function SearchBar() {
  const [searchPrompt, setSearchPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazoneProductURl(searchPrompt)

    if(!isValidLink) return alert("Please provide valid Amazone Link")
    try {
      setIsLoading(true)
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error)
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
  <form
    className="flex flex-wrap gap-4 mt-12"
    onSubmit={handleSubmit}
  >
      <input
       type="text" placeholder="Enter product link" 
       className="searchbar-input"
       value={searchPrompt}
       onChange={(e) => setSearchPrompt(e.target.value)}
       />
      <button type="submit" className="searchbar-btn" disabled={searchPrompt === ""}>
        {isLoading ? "Searchin..." : "Search"}
      </button>
   </form>
  )
}

export default SearchBar
