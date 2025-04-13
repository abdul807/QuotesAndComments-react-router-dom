
const BaseUrl = 'https://react-cd9ef-default-rtdb.firebaseio.com'
export async function Addquote(quotedata){

    const response = await fetch(`${BaseUrl}/quotes.json`, {
        method: "POST",
        body: JSON.stringify(quotedata),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'},


    })
    // const data = await response.json()


    if(!response.ok){
        throw new Error("Something went wrong");
        
    }

    return null;

}


export const getAllquotes = async () =>{
    const response = await fetch(`${BaseUrl}/quotes.json`)
    const data = await response.json()


    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
      }
    
      const transformedQuotes = [];
    
      for (const key in data) {
        const quoteObj = {
          id: key,
          ...data[key],
        };
    
        transformedQuotes.push(quoteObj);
      }
    
      return transformedQuotes;
}


export const getquote = async (quoteId) =>{
    const response = await fetch(`${BaseUrl}/quotes/${quoteId}.json`)
    const data = await response.json()


    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
      }
    
      const loadedQuote = {
        id: quoteId,
        ...data,
      };
    
      return loadedQuote;
}



export const Addcomment = async (requestData) =>{
    const response = await fetch(`${BaseUrl}/comments/${requestData.quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
    
      if (!response.ok) {
        throw new Error(data.message || 'Could not add comment.');
      }
    
      return { commentId: data.name };
}




export const getAllcomments = async (quoteId) =>{
    const response = await fetch(`${BaseUrl}/comments/${quoteId}.json`)
    const data = await response.json()


    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
      }
    
      const transformedComments = [];
    
      for (const key in data) {
        const quoteObj = {
          id: key,
          ...data[key],
        };
    
        transformedComments.push(quoteObj);
      }
    
      return transformedComments;
}

