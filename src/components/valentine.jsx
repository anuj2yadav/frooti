import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Valentine.css';

const Valentine = () => {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const phrases = [
    "Shruti, will you be my Valentine?",  // 0
    "No? Are you sure?",                  // 1
    "What if I ask nicely?",              // 2
    "Pretty please?",                     // 3
    "I'll get you chocolate!",            // 4
    "What about pizza?",                  // 5
    "Don't break my heart!",              // 6
    "Okay, that's it...",                 // 7
    "You leave me no choice! ❤️"          // 8 (END STATE)
  ];

  // If we reach the last phrase, we turn the NO button into a YES button
  const isLastStep = noCount >= phrases.length - 1;
  
  // Logic: If noCount is odd, swap positions (only matters before the end)
  const isSwapped = noCount % 2 !== 0;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  const getCurrentText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container d-flex justify-content-center align-items-center vh-100">
      
      {!accepted ? (
        <div className="card shadow-lg p-4 text-center" style={{ maxWidth: '500px', width: '90%' }}>
          <div className="card-body">
            
            {/* Cute GIF changes if she is being stubborn */}
            <img 
              className="img-fluid rounded mb-4" 
              src={isLastStep 
                ? "https://media.tenor.com/J53r4F_tTGIAAAAi/bubu-dudu-sseeyall.gif" // Smug/Happy GIF
                : "https://media.tenor.com/hI7ljafbbdAAAAAi/mochi-cat-mochi.gif"     // Asking GIF
              }
              alt="cute bear" 
              style={{maxWidth: '200px'}}
            />
            
            <h1 className="fw-bold text-dark mb-4 transition-text">
              {getCurrentText()}
            </h1>
            
            <div className="d-flex justify-content-center gap-3">
              
              {/* ORIGINAL YES BUTTON */}
              <button 
                className={`btn btn-danger btn-lg px-4 fw-bold ${isSwapped ? 'order-2' : 'order-1'}`}
                onClick={handleYesClick}
                style={{ minWidth: '100px' }} 
              >
                Yes
              </button>
              
              {/* THE "NO" BUTTON (Which might become a YES button) */}
              {isLastStep ? (
                /* TRANSFORMED BUTTON: Looks like YES, acts like YES */
                <button 
                  className={`btn btn-danger btn-lg px-4 fw-bold ${isSwapped ? 'order-1' : 'order-2'}`}
                  onClick={handleYesClick}
                  style={{ minWidth: '100px' }}
                >
                  Yes 
                </button>
              ) : (
                /* NORMAL NO BUTTON: Swaps and increments count */
                <button 
                  className={`btn btn-secondary btn-lg px-4 ${isSwapped ? 'order-1' : 'order-2'}`}
                  onClick={handleNoClick}
                  style={{ minWidth: '100px' }}
                >
                  No
                </button>
              )}

            </div>
          </div>
        </div>
      ) : (
        /* --- SUCCESS CARD --- */
        <div className="card shadow-lg p-4 text-center border-danger animate-fade-in" style={{ maxWidth: '500px', width: '90%' }}>
          <div className="card-body">
            <h1 className="text-danger fw-bold display-5">Yay! 💖</h1>
            <p className="lead mt-3 fw-bold">
              I knew you'd say yes! (Eventually) 😉
              <br/>See you on the 14th, Shruti!
            </p>
            
            <div className="mt-4">
              <img 
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
                alt="Bears kissing" 
                className="img-fluid rounded"
                style={{ maxWidth: '300px' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Valentine;