
    document.addEventListener("DOMContentLoaded", function () {
      const words = generateRandomWords(200); // Update the number of words here

      words.forEach((word) => {
        createWordElement(word);
      });

      document.addEventListener("mousemove", moveWords);

      function generateRandomWords(count) {
        const randomWords = [


          "ቋንቋ", "የድምጽ፣", "የምልክት", "ወይም", "የምስል", "ቅንብር", "ሆኖ", "ለማሰብ", "ወይም", "የታሰበን",
          "ሃሳብ", "ለሌላ", "ለማስተላለፍ", "የሚረዳ", "መሳሪያ", "ነው።", "በአጭሩ", "ቋንቋ", "የምልክቶች", "ስርዓትና", "እኒህን",
          "ምልክቶች", "ለማቀናበር", "የሚያስፈልጉ", "ህጎች", "ጥንቅር", "ነው።", "ቋንቋዎችን", "ለመፈረጅ", "እንዲሁም", "ለመክፈል",
          "የሚያስችሉ", "መስፈርቶችን", "ለማስቀመጥ", "ባለው", "ችግር", "ምክንያት", "በአሁኑ", "ሰዓት", "በርግጠኝነት", "ስንት",
          "ቋንቋ", "በዓለም", "ላይ", "እንዳለ", "ማወቅ", "አስቸጋሪ", "ነው።", "እንደ", "ተለያየ", "መስፈርት", "ግምት",
          "እስክ", "ቋንቋዎች", "በአለም", "ላይ", "እንዳሉ", "ስምምነት", "አለ።", "የሰው", "ልጅ","ቋንቋ", "በተፈጥሮ", "የሚገኝ", "ሲሆን", "ሲሆን", "ቋንቋን ", "በደመ", "ነፍስ", "ይማራሉ","የሚገኙ ", "በተፈጥሮ", "ጸባዮች ", "ሲሆን",
        
        ];

        const repeatedWords = [];
        for (let i = 0; i < count; i++) {
          repeatedWords.push(randomWords[i % randomWords.length]);
        }

        return repeatedWords;
      }

      function createWordElement(word) {
        const wordElement = document.createElement("div");
        wordElement.className = "word";
        wordElement.textContent = word;
        wordElement.style.color = generateRandomColor(); // Add random color
        document.body.appendChild(wordElement);
      }

      function moveWords(event) {
        const wordElements = document.querySelectorAll(".word");

        wordElements.forEach((wordElement) => {
          const distance = getDistance(event, wordElement);
          const maxDistance = 500; 
          const opacity = 0.5 - distance / maxDistance;

          const fontSizeFactor = 5; 
          const fontSize = 15 + fontSizeFactor * (1 - opacity) * 5;

          const spacingFactor = 2;
          const spacing = maxDistance - distance * spacingFactor;

          const randomOffset = 300;
          const offsetX = getRandomOffset(randomOffset);
          const offsetY = getRandomOffset(randomOffset);

          wordElement.style.opacity = opacity;
          wordElement.style.transform = `translate(${event.clientX + offsetX}px, ${event.clientY + offsetY}px) scale(${spacing / maxDistance})`;
          wordElement.style.fontSize = `${fontSize}px`;
        });
      }

      function getRandomOffset(offset) {
        return Math.floor(Math.random() * (2 * offset + 1)) - offset;
      }

      function generateRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      function getDistance(event, element) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const rect = element.getBoundingClientRect();
        const elementX = rect.x + rect.width / 2;
        const elementY = rect.y + rect.height / 2;

        return Math.sqrt((mouseX - elementX) ** 2 + (mouseY - elementY) ** 2);
      }
    });
