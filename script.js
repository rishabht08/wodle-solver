const button = document.getElementById('solve-button');
const test  = document.getElementById('test');
button.addEventListener('click' , () => {
 
    function modifyDOM() { 
        const solution = window.localStorage.getItem('nyt-wordle-state')
        let actualString;
        try {
            actualString  = JSON.parse(solution)
        } catch (error) {
            actualString = {};  
        }
    
        const value = actualString.solution;

            let k = 0;
            const interval = setInterval(() => {
                window.dispatchEvent(new KeyboardEvent('keydown', {
                    key: value[k]
                  }));
                  if(k == 4) clearInterval(interval);
                  k++;
            } , 500)
        
        
        setTimeout(() => {
            window.dispatchEvent(new KeyboardEvent('keydown', {
                key: "Enter"
              }));
        
        }, 4000)
    }

    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' 
    }, (results) => {
        //Just the innerHTML and not DOM structure
    });

})


