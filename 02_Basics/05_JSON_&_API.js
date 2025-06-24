// ===============================
//  API - "Application Programming Interface"
// ===============================

/* Socho tumhara JavaScript code ek restaurant customer hai.
   Aur tumhe khaana chahiye – lekin tum kitchen mein nahi ja sakte.
   Toh tum waiter ko bolte ho – wahi waiter hota hai API.

   Tum (JavaScript code) API ko request bhejte ho – jaise "bhaiya ek pizza chahiye".
   API wo request server tak le jaata hai.
   Fir jab pizza (data) ready hota hai, API tumhe wapas de deta hai.

   -> Toh API ek bridge hai tumhare code aur server ke beech mein.
*/



// ===============================
// JSON - "JavaScript Object Notation"
// ===============================

/* Ye ek format hai jisme data API ke through aata hai.
   Socho tumne pizza manga (data request ki), toh pizza ek box mein aata hai – wahi box hota hai JSON.
   Pehele data XML format mein ata tha, but APIs aaj kal mostly JSON format ke through hin data dete hain.

   JSON mein data key-value pairs mein hota hai, yeh JS ke object and array hote hain.

   JSON mein keys generally string hote hain.

        Example (Object type) :
        {
            "name": "Ayush",
            "age": 21,
            "college": "XYZ Institute"
        }
 
        Example (Array type) :
        [
            {
                "id": 1,
                "name": "Ayush"
            },
        ]

   -> JavaScript is format ko easily samajh leta hai.
*/



// ===============================
// Hum API se data kyu lete hain?
// ===============================

/* Socho tumhara app weather dikhata hai –
   Toh tumhe har jagah ka temperature manually likhna padega?
   Nahin! API se tum real-time data fetch kar sakte ho.

   -> Agar khud ka kaam kisi aur se karwana h toh API ko use karte hain !!
*/

// Real API link nhi hai yeh, isliye error ayega abhi.
fetch("https://api.example.com/data") // step 1: API ko request bhejte hein
    .then(response => response.json()) // step 2: JSON format mein data lete hein
    .then(data => {
        console.log("Data from API:", data); // step 3: Data mil gaya, ab use karte hein, console.log se output leke
    })
    .catch(error => {
        console.log("Kuch error aaya:", error); // step 4: Agar koi error aaya toh yeh chalega
    });

/*
    .then() – Jab kaam sahi ho jaye (data mil jaye), toh kya karna hai, wo batata hai.
    .catch() – Agar kuch problem aaye (error ho), toh kya karna hai, wo batata hai.
*/