
document.addEventListener("DOMContentLoaded", () => {
  const text = `My Dearest Bunny💗💌

As the sun rises, my first thought is you. You’re the warmth to my mornings, the calm to my chaos, and the reason I wake up smiling every day. 
Just knowing that you exist in this world and that I have the honor of loving you fills my heart with peace and purpose.

I hope you slept well, my love. If I were there beside you, I’d gently pull you into my arms, kiss your forehead, and whisper, “Good morning, My sweet Bunny”. Even though distance separates us right now, my heart is always with you. In every quiet morning and every busy hour, I hope you can feel how deeply I care for you.

Today might be exhausting and boring but I know you’ll handle it with the same strength and grace you always do. You amaze me constantly, not just with your intelligence and beauty, but with your energy, your smile, your voice, and the way you make me smile with the cute things you do.

Please don’t forget to take care of yourself today. Eat well, hydrate, and give yourself moments of rest. And if at any point the day becomes too heavy, remember I’m just a message away. Whether you need support, comfort, or even just a little laugh. I’m here for you, always love.

You are my peace in a restless world. You make my ordinary day amazing. I never imagined I could feel this loved, safe, and inspired until you walked into my life. 
You are the greatest blessing that came into my life and I will never stop being grateful for you.

I love you—deeply, fully, and endlessly. I’ll always be here, cheering you on and holding you close in my heart.

Have a lovely day ahead, my love.

I miss you. I love you.
Sending you the warmest hugs and the sweetest kisses to start your morning right. 💗💋

Forever yours,
Your hubby 💗🐰`


  let i = 0;
  const speed = 15; // Typing speed

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("letterContent").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

