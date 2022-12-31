let cards = [
    {
      image: "./img/0.jpg",
      cardName: "The Fool - 0",
      description: `
        Astro: Uranus - The awakener,<br/>
        bringing change and shock. <br/><br/>
        Num: 0 - Infinite Possibilities<br/>
        ↑ New Beginnings, Freedom<br/>
        ↓ Naivete, Fear of Change<br/>
      `
    },
    {
      image: "./img/1.jpg",
      cardName: "The Magician - 1",
      description: `
      Astro: Mercury - Communication <br/><br/>
      Num: 1 - creative, strongly individual, inventive and positive<br/>
      ↑ Manifestation, Creator, Inspired Action<br/>
      ↓ Disconnect<br/>
      `
    },
    {
        image: "./img/2.jpg",
        cardName: "The High Priestess - 2",
        description: `
        Astro: The Moon - Emotions, Feelings, Intuition, Memories <br/><br/>
        Num: 2 - highly emotional, naturally affectionate, sensitive, caring and loving<br/>
        ↑ Intuition, Self-Knowledge<br/>
        ↓ Refusal to look again<br/>
        `
      },
      {
        image: "./img/3.jpg",
        cardName: "The Empress - 3",
        description: `
        Astro: Venus - Courtship,
        adoration, the relationship
        with tangible objects<br/><br/>
        Num: 3 - Thoughtfully innovative<br/>
        ↑ Receiving love, creativity<br/>
        ↓ Disconnection, blocks<br/>
        `
      },
      {
        image: "./img/4.jpg",
        cardName: "The Emperor - 4",
        description: `
        Astro: Aries - Assertive
        engagement with the outer
        world<br/><br/>
        Num: 4 - Stable and confident<br/>
        ↑ Inspired Action<br/>
        ↓ Defensive, Stuck, Reactive<br/>
        `
      },
      {
        image: "./img/5.jpg",
        cardName: "The Hierophant - 5",
        description: `
        Astro: Taurus - Contemplation
        and inner awareness
        <br/><br/>
        Num: 5 - stimulating, witty,
        charismatic, optimistic,
        <br/>
        ↑ Teacher, tradition<br/>
        ↓ Rigid Beliefs, Refusal<br/>
        `
      },
      {
        image: "./img/6.jpg",
        cardName: "The Lovers - 6",
        description: `
        Astro: Gemini -
        Communication and loyalty
        <br/><br/>
        Num: 6 - domestic happiness,
        harmony and stability
        <br/>
        ↑ Relationship, alignment<br/>
        ↓ Disharmony, Imbalance<br/>
        `
      },
      {
        image: "./img/7.jpg",
        cardName: "The Chariot - 7",
        description: `
        Astro: Cancer - Emotional, Empathy, Loyalty - emotion
        <br/><br/>
        Num: 7 - introspective,
        intuitive
        <br/>
        ↑ A Journey, Momentum<br/>
        ↓ Stagnation, Unable to move<br/>
        `
      },
      {
        image: "./img/8.jpg",
        cardName: "Strength - 8",
        description: `
        Astro: Leo - Sustainability & dedication
        <br/><br/>
        Num: 8 - Achiever, measures life by the goals met
        <br/>
        ↑ Overcoming obstacles<br/>
        ↓ Apprehension, Lacking Confidence<br/>
        `
      },
      {
        image: "./img/9.jpg",
        cardName: "The Hermit - 9",
        description: `
        Astro: Virgo - Connecting
        thought patterns and ideas
        <br/><br/>
        Num: 9 - Compassion,
        selflessness
        <br/>
        ↑ Wisdom, Solitude<br/>
        ↓ Loneliness, Isolation<br/>
        `
      },
      {
        image: "./img/10.jpg",
        cardName: "Wheel of Fortune - 10",
        description: `
        Astro: Jupiter - Higher
        Learning, Luck and Good
        Fortune
        <br/><br/>
        Num: 10 -
        <br/>
        ↑ Cycles and Change<br/>
        ↓ Delays and Setbacks
        <br/>
        `
      },
      {
        image: "./img/11.jpg",
        cardName: "Justice - 11",
        description: `
        Astro: Libra - Love, healing,
        balance, inclusivity
        <br/><br/>
        Num: 1 + 1 = 2, High Priestess
        <br/>
        ↑ Truth, Balance<br/>
        ↓ Imbalance, Unfair Treatment
        <br/>
        `
      },
      {
        image: "./img/12.jpg",
        cardName: "The Hanged Man - 12",
        description: `

        Astro: Neptune - Dreams,
        Illusion, abstract thought

        <br/><br/>

        Num: 1+2=3, The Empress

        <br/>

        ↑ Waiting, Shifting Perspective

        <br/>

        ↓ Impatience, Inertia

        <br/>
        `
      },
      {
        image: "./img/13.jpg",
        cardName: "Death - 13",
        description: `
        Astro: Scorpio -
        Concentration, discovering
        hidden truths
        <br/><br/>
        Num: 1+3=4, The Emperor
        <br/>
        ↑ Transformation, Release
        <br/>
        ↓ Clinging to the past,
        Refusing to Change
        <br/>
        `
      },
      {
        image: "./img/14.jpg",
        cardName: "Temperance - 14",
        description: `
        Astro: Sagittarius - Change-Maker, teaching,
        <br/><br/>
        Num: 1+4-5, The Hierophan
        <br/>
        ↑ Moderation, Harmony, Divine Timing
        <br/>
        ↓ Imbalance, Pushing for
        Results
        <br/>
        `
      },
      {
        image: "./img/15.jpg",
        cardName: "The Devil - 15",
        description: `
        Astro: Capricorn - Achieving
        goals, building, climbing
        <br/><br/>
        Num: 1+5=6, The Lovers
        <br/>
        ↑ Sabotage, Addiction
        <br/>
        ↓ Release, Liberation
        <br/>
        `
      },

      {
        image: "./img/16.jpg",
        cardName: "The Tower - 16",
        description: `
        Astro: Mars - Energy, Passion, Drive, Determination
        <br/><br/>
        Num: 1+6=7, The Chariot
        <br/>
        ↑ Upheaval, Sudden Change,
        Getting back on the path to
        best alignment
        <br/>
        ↓ Hanging on, Fear of letting go
        <br/>
        `
      },
      {
        image: "./img/17.jpg",
        cardName: "The Star - 17",
        description: `
        Astro: Aquarius - Intelligence, Fresh Perspective
        <br/><br/>
        Num: 1+7=8, Strength
        <br/>
        ↑ Hope, Healing
        <br/>
        ↓ Loss of faith, Disconnection
        <br/>
        `
      },
      {
        image: "./img/18.jpg",
        cardName: "The Moon - 18",
        description: `
        Astro: Pisces - Compassionate, Empathic
        <br/><br/>
        Num: 1+8=9, The Hermit
        <br/>
        ↑ Dreams, Illusions, seeing your shadow
        <br/>
        ↓ Refusing the truth
        <br/>
        `
      },
      {
        image: "./img/19.jpg",
        cardName: "The Sun - 19",
        description: `
        Astro: Sun - Vitality, Strength, Energy
        <br/><br/>
        Num: 1+9=10, 1+0=1, Wheel of Fortune, Magician
        <br/>
        ↑ Clarity, Optimism
        <br/>
        ↓ Pessimism, Confusion
        <br/>
        `
      },
      {
        image: "./img/20.jpg",
        cardName: "Judgment - 20",
        description: `
        Astro: Pluto - Transformation, regeneration, rebirth
        <br/><br/>
        Num: 2+0=2, The High Priestess, Justice
        <br/>
        ↑ Awakening, Acceptance, The Truth Comes Out
        <br/>
        ↓ Self Doubt, Resentment
        <br/>
        `
      },
      {
        image: "./img/21.jpg",
        cardName: "The World - 21",
        description: `
        Astro: Saturn - Perseverance, withstanding the test of time
        <br/><br/>
        Num: 2+1=3, Empress, Hanged Man
        <br/>
        ↑ Successful Completion, Reaping Rewards
        <br/>
        ↓ Incomplete Action, Delayed Celebrations
        <br/>
        `
      },

      /* Arcanos Menores */


  ];


 

const drawCard = document.querySelector("#DrawCard")
const clearAll = document.querySelector("#ClearAll")

function addCard(){
    const indice = Math.floor(Math.random() * cards.length);
    let card= `
    <div class="Card">
    <img src=${cards[indice].image} alt="">
    <div>
      <h3>${cards[indice].cardName}</h3>
      <p>
      ${cards[indice].description}
        </p>
    </div>
  </div>`

  cards.splice(indice, 1)
    return card
}



drawCard.addEventListener('click', function(){
    document.querySelector('.tarotCards').innerHTML += addCard()
})

clearAll.addEventListener('click',function(){
    document.querySelector('.tarotCards').innerHTML = `
    
  `
     
    cards = [
      {
        image: "./img/0.jpg",
        cardName: "The Fool - 0",
        description: `
          Astro: Uranus - The awakener,<br/>
          bringing change and shock. <br/><br/>
          Num: 0 - Infinite Possibilities<br/>
          ↑ New Beginnings, Freedom<br/>
          ↓ Naivete, Fear of Change<br/>
        `
      },
      {
        image: "./img/1.jpg",
        cardName: "The Magician - 1",
        description: `
        Astro: Mercury - Communication <br/><br/>
        Num: 1 - creative, strongly individual, inventive and positive<br/>
        ↑ Manifestation, Creator, Inspired Action<br/>
        ↓ Disconnect<br/>
        `
      },
      {
          image: "./img/2.jpg",
          cardName: "The High Priestess - 2",
          description: `
          Astro: The Moon - Emotions, Feelings, Intuition, Memories <br/><br/>
          Num: 2 - highly emotional, naturally affectionate, sensitive, caring and loving<br/>
          ↑ Intuition, Self-Knowledge<br/>
          ↓ Refusal to look again<br/>
          `
        },
        {
          image: "./img/3.jpg",
          cardName: "The Empress - 3",
          description: `
          Astro: Venus - Courtship,
          adoration, the relationship
          with tangible objects<br/><br/>
          Num: 3 - Thoughtfully innovative<br/>
          ↑ Receiving love, creativity<br/>
          ↓ Disconnection, blocks<br/>
          `
        },
        {
          image: "./img/4.jpg",
          cardName: "The Emperor - 4",
          description: `
          Astro: Aries - Assertive
          engagement with the outer
          world<br/><br/>
          Num: 4 - Stable and confident<br/>
          ↑ Inspired Action<br/>
          ↓ Defensive, Stuck, Reactive<br/>
          `
        },
        {
          image: "./img/5.jpg",
          cardName: "The Hierophant - 5",
          description: `
          Astro: Taurus - Contemplation
          and inner awareness
          <br/><br/>
          Num: 5 - stimulating, witty,
          charismatic, optimistic,
          <br/>
          ↑ Teacher, tradition<br/>
          ↓ Rigid Beliefs, Refusal<br/>
          `
        },
        {
          image: "./img/6.jpg",
          cardName: "The Lovers - 6",
          description: `
          Astro: Gemini -
          Communication and loyalty
          <br/><br/>
          Num: 6 - domestic happiness,
          harmony and stability
          <br/>
          ↑ Relationship, alignment<br/>
          ↓ Disharmony, Imbalance<br/>
          `
        },
        {
          image: "./img/7.jpg",
          cardName: "The Chariot - 7",
          description: `
          Astro: Cancer - Emotional, Empathy, Loyalty - emotion
          <br/><br/>
          Num: 7 - introspective,
          intuitive
          <br/>
          ↑ A Journey, Momentum<br/>
          ↓ Stagnation, Unable to move<br/>
          `
        },
        {
          image: "./img/8.jpg",
          cardName: "Strength - 8",
          description: `
          Astro: Leo - Sustainability & dedication
          <br/><br/>
          Num: 8 - Achiever, measures life by the goals met
          <br/>
          ↑ Overcoming obstacles<br/>
          ↓ Apprehension, Lacking Confidence<br/>
          `
        },
        {
          image: "./img/9.jpg",
          cardName: "The Hermit - 9",
          description: `
          Astro: Virgo - Connecting
          thought patterns and ideas
          <br/><br/>
          Num: 9 - Compassion,
          selflessness
          <br/>
          ↑ Wisdom, Solitude<br/>
          ↓ Loneliness, Isolation<br/>
          `
        },
        {
          image: "./img/10.jpg",
          cardName: "Wheel of Fortune - 10",
          description: `
          Astro: Jupiter - Higher
          Learning, Luck and Good
          Fortune
          <br/><br/>
          Num: 10 -
          <br/>
          ↑ Cycles and Change<br/>
          ↓ Delays and Setbacks
          <br/>
          `
        },
        {
          image: "./img/11.jpg",
          cardName: "Justice - 11",
          description: `
          Astro: Libra - Love, healing,
          balance, inclusivity
          <br/><br/>
          Num: 1 + 1 = 2, High Priestess
          <br/>
          ↑ Truth, Balance<br/>
          ↓ Imbalance, Unfair Treatment
          <br/>
          `
        },
        {
          image: "./img/12.jpg",
          cardName: "The Hanged Man - 12",
          description: `
  
          Astro: Neptune - Dreams,
          Illusion, abstract thought
  
          <br/><br/>
  
          Num: 1+2=3, The Empress
  
          <br/>
  
          ↑ Waiting, Shifting Perspective
  
          <br/>
  
          ↓ Impatience, Inertia
  
          <br/>
          `
        },
        {
          image: "./img/13.jpg",
          cardName: "Death - 13",
          description: `
          Astro: Scorpio -
          Concentration, discovering
          hidden truths
          <br/><br/>
          Num: 1+3=4, The Emperor
          <br/>
          ↑ Transformation, Release
          <br/>
          ↓ Clinging to the past,
          Refusing to Change
          <br/>
          `
        },
        {
          image: "./img/14.jpg",
          cardName: "Temperance - 14",
          description: `
          Astro: Sagittarius - Change-Maker, teaching,
          <br/><br/>
          Num: 1+4-5, The Hierophan
          <br/>
          ↑ Moderation, Harmony, Divine Timing
          <br/>
          ↓ Imbalance, Pushing for
          Results
          <br/>
          `
        },
        {
          image: "./img/15.jpg",
          cardName: "The Devil - 15",
          description: `
          Astro: Capricorn - Achieving
          goals, building, climbing
          <br/><br/>
          Num: 1+5=6, The Lovers
          <br/>
          ↑ Sabotage, Addiction
          <br/>
          ↓ Release, Liberation
          <br/>
          `
        },
  
        {
          image: "./img/16.jpg",
          cardName: "The Tower - 16",
          description: `
          Astro: Mars - Energy, Passion, Drive, Determination
          <br/><br/>
          Num: 1+6=7, The Chariot
          <br/>
          ↑ Upheaval, Sudden Change,
          Getting back on the path to
          best alignment
          <br/>
          ↓ Hanging on, Fear of letting go
          <br/>
          `
        },
        {
          image: "./img/17.jpg",
          cardName: "The Star - 17",
          description: `
          Astro: Aquarius - Intelligence, Fresh Perspective
          <br/><br/>
          Num: 1+7=8, Strength
          <br/>
          ↑ Hope, Healing
          <br/>
          ↓ Loss of faith, Disconnection
          <br/>
          `
        },
        {
          image: "./img/18.jpg",
          cardName: "The Moon - 18",
          description: `
          Astro: Pisces - Compassionate, Empathic
          <br/><br/>
          Num: 1+8=9, The Hermit
          <br/>
          ↑ Dreams, Illusions, seeing your shadow
          <br/>
          ↓ Refusing the truth
          <br/>
          `
        },
        {
          image: "./img/19.jpg",
          cardName: "The Sun - 19",
          description: `
          Astro: Sun - Vitality, Strength, Energy
          <br/><br/>
          Num: 1+9=10, 1+0=1, Wheel of Fortune, Magician
          <br/>
          ↑ Clarity, Optimism
          <br/>
          ↓ Pessimism, Confusion
          <br/>
          `
        },
        {
          image: "./img/20.jpg",
          cardName: "Judgment - 20",
          description: `
          Astro: Pluto - Transformation, regeneration, rebirth
          <br/><br/>
          Num: 2+0=2, The High Priestess, Justice
          <br/>
          ↑ Awakening, Acceptance, The Truth Comes Out
          <br/>
          ↓ Self Doubt, Resentment
          <br/>
          `
        },
        {
          image: "./img/21.jpg",
          cardName: "The World - 21",
          description: `
          Astro: Saturn - Perseverance, withstanding the test of time
          <br/><br/>
          Num: 2+1=3, Empress, Hanged Man
          <br/>
          ↑ Successful Completion, Reaping Rewards
          <br/>
          ↓ Incomplete Action, Delayed Celebrations
          <br/>
          `
        },
  
        /* Arcanos Menores */
  
  
    ];
    /* Criar um array com as cartas iniciais por Module */
})
