let cards = [
    {
      image: "./img/0.jpg",
      cardName: "The Fool - 0",
      description: `
        Astro: Uranus - The awakener,<br/>
        bringing change and shock. <br/><br/>
        Num: 0 - Infinite Possibilities<br/><br/>
        ↑ New Beginnings, Freedom<br/>
        ↓ Naivete, Fear of Change<br/>
      `
    },
    {
      image: "./img/1.jpg",
      cardName: "The Magician - 1",
      description: `
      Astro: Mercury - Communication <br/><br/>
      Num: 1 - creative, strongly individual, inventive and positive<br/><br/>
      ↑ Manifestation, Creator, Inspired Action<br/>
      ↓ Disconnect<br/>
      `
    },
    {
        image: "./img/2.jpg",
        cardName: "The High Priestess - 2",
        description: `
        Astro: The Moon - Emotions, Feelings, Intuition, Memories <br/><br/>
        Num: 2 - highly emotional, naturally affectionate, sensitive, caring and loving<br/><br/>
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
        Num: 3 - Thoughtfully innovative<br/><br/>
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
        Num: 4 - Stable and confident<br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        Num: 10 - The Magician
        <br/><br/>
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
        <br/><br/>
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

        <br/><br/>

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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
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
        <br/><br/>
        ↑ Successful Completion, Reaping Rewards
        <br/>
        ↓ Incomplete Action, Delayed Celebrations
        <br/>
        `
      },

      /* Arcanos Menores */
       /* WANDS */

      {
        image: "./img/22.jpg",
        cardName: "Ace of wands",
        description: `
        Wands - Creativity & Passion 
        Aces - New Beginnings, Fresh Starts, Opportunity, New Ideas        
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Inspiration, Creativity, New Creative Ideas
        <br/>
        ↓ Hesitation, Delays
        <br/><br/>
        
        `
      },
      {
        image: "./img/23.jpg",
        cardName: "Twos of wands",
        description: `
        Wands - Creativity & Passion 
        Twos - Cards of Decision or choices        
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Waiting on Results to Make a Decision, Future Planning
        <br/>
        ↓ Impatience, Lack of Planning
        <br/>
        `
      },
      {
        image: "./img/24.jpg",
        cardName: "Threes of wands",
        description: `
        Wands - Creativity & Passion 
        Threes - Collaboration, Teamwork, and Community Cards        
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Expansion, Potential Travel, Growth, Collaboration
        <br/>
        ↓ Delays, Disappointment
        <br/><br/>

        `
      },
      {
        image: "./img/25.jpg",
        cardName: "Fours of wands",
        description: `
        Wands - Creativity & Passion 
        Fours - Foundations, Stability, Meeting Your Needs        
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Celebration, Family and Friendship, Homecomings, Special Events
        <br/>
        ↓Returning to the Joy of the Present
        <br/><br/>

        `
      },
      {
        image: "./img/26.jpg",
        cardName: "Fives of wands",
        description: `
        Wands - Creativity & Passion 
        Fives - Chaos, Conflict, Competition       
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Competition, Rivalry, Challenges, Obstacles
        <br/>
        ↓Exaggeration, Finding a Solution
        <br/><br/>

        `
      },
      {
        image: "./img/27.jpg",
        cardName: "Sixes of wands",
        description: `
        Wands - Creativity & Passion 
        Sixes - Generosity, Best Outcomes, Recognition       
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Victory, Recognition, Standing in the Spotlight, Success
        <br/>
        ↓ Delayed Success
        <br/><br/>

        `
      },
      {
        image: "./img/28.jpg",
        cardName: "Sevens of wands",
        description: `
        Wands - Creativity & Passion 
        Sevens - Defense, Deception, Possibilities     
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Defensiveness, Assertiveness, Needing to Protect Yourself
        <br/>
        ↓ Hypervigilance, Feeling Defeated
        <br/><br/>
        `
      },
      {
        image: "./img/29.jpg",
        cardName: "Eights of wands",
        description: `
        Wands - Creativity & Passion 
        Eights - Decisions, Restrictions, Productivity    
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Movement, Quick Action, Speed of News
        <br/>
        ↓Slowing Down, Exercising Patience
        <br/><br/>
        `
      },
      {
        image: "./img/30.jpg",
        cardName: "Nines of wands",
        description: `
        Wands - Creativity & Passion 
        Nines - Resilience, Worry & Success, Abundance  
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Persistence, Self-Reliance, Boundary Setting
        <br/>
        ↓ Giving Up, Delays
        <br/><br/>
        `
      },
      {
        image: "./img/31.jpg",
        cardName: "Tens of wands",
        description: `
        Wands - Creativity & Passion 
        Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↓ Pressure, Exhaustion
        <br/>
        ↓ Giving Up, Delays
        <br/><br/>
        `
      },
      {
        image: "./img/32.jpg",
        cardName: "Pages of wands",
        description: `
        Wands - Creativity & Passion 
        Pages - Messengers (or children)  
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Impulsiveness, Sense of Adventure
        <br/>
        ↓ Unreliability, Hastiness
        <br/><br/>
        `
      },
      {
        image: "./img/33.jpg",
        cardName: "Knights of wands",
        description: `
        Wands - Creativity & Passion 
        Knights - Action, Seeking Answers, Progress  
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Fact Action, Passion, Lusty/Free Spirited Person
        <br/>
        ↓ Self-Doubt, Hesitation
        <br/><br/>
        `
      },
      {
        image: "./img/34.jpg",
        cardName: "Queens of wands",
        description: `
        Wands - Creativity & Passion 
        Queens - Support, Strength, Emotion 
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Creativity, Ambition, Confidence to Stand on Her Own
        <br/>
        ↓ Feeling Unworthy, Creative Blocks
        <br/><br/>
        `
      },
      {
        image: "./img/35.jpg",
        cardName: "Kings of wands",
        description: `
        Wands - Creativity & Passion 
        Kings - Foundational Leadership, Strategy
        <br/><br/>
        Fire Signs: Aries, Leo, Sagittarius
        <br/><br/>
        ↑ Power, Authority, Creative Leadership, Bold & Outgoing Personality
        <br/>
        ↓ Abuse of Power, Bullying, Big-Headed
        <br/><br/>
        `
      },

       /* CUPS*/

       {
        image: "./img/36.jpg",
        cardName: "Ace of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Aces - New Beginnings, Fresh Starts, Opportunity, New Ideas        
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancerration, Creativity, New Creative Ideas
        <br/>
        ↓ Hesitation, Delays
        <br/><br/>
        ↑ New emotional experiences or opportunities, love, compassion
        <br/>
        ↓ Repressing or blocking emotions
        <br/>
        `
      },
      {
        image: "./img/37.jpg",
        cardName: "Twos of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Twos - Cards of Decision or choices        
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ *minor arcana version of the lovers card* partnership, romance, proposals
        <br/>
        ↓ Imbalance, lack of harmony, discontent in emotion
        <br/>
        `
      },
      {
        image: "./img/38.jpg",
        cardName: "Threes of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Threes - Collaboration, Teamwork, and Community Cards        
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Community, finding your soul people, celebration, friendship
        <br/>
        ↓ Imbalance, too many cooks in the kitchen        
        <br/><br/>

        `
      },
      {
        image: "./img/39.jpg",
        cardName: "Fours of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Fours - Foundations, Stability, Meeting Your Needs        
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Deep thoughts, apathy, re-evaluating circumstances
        <br/>
        ↓ Avoidance, missed opportunities, lack of caring

        <br/><br/>

        `
      },
      {
        image: "./img/40.jpg",
        cardName: "Fives of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Fives - Chaos, Conflict, Competition       
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Feeling lost, abandonment, regret
        <br/>
        ↓ Moving on from a situation, forgiveness
        <br/><br/>

        `
      },
      {
        image: "./img/41.jpg",
        cardName: "Sixes of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Sixes - Generosity, Best Outcomes, Recognition       
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Nostalgia, Reunions, childhood innocence, memories
        <br/>
        ↓ Focused on past stories, unrealistic expectations
        <br/><br/>

        `
      },
      {
        image: "./img/42.jpg",
        cardName: "Sevens of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Sevens - Defense, Deception, Possibilities     
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Many choices, unable to commit
        <br/>
        ↓ Temptation, Illusion
        <br/><br/>
        `
      },
      {
        image: "./img/43.jpg",
        cardName: "Eights of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Eights - Decisions, Restrictions, Productivity    
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Walking away, moving on, letting go of that which no longer resonates
        <br/>
        ↓ Hanging on, avoiding change, clinging to the past
        <br/><br/>
        `
      },
      {
        image: "./img/44.jpg",
        cardName: "Nines of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Nines - Resilience, Worry & Success, Abundance  
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Satisfaction, abundance, best case scenario, having all cups/emotions filled
        <br/>
        ↓ Overindulgence, arrogance, taking more than your share
        <br/><br/>
        `
      },
      {
        image: "./img/45.jpg",
        cardName: "Tens of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Happiness, fulfillment, total love and contentment, “porch swing card”
        <br/>
        ↓ Disharmony, surface level happiness, an inability to appreciate what you have
        <br/><br/>
        `
      },
      {
        image: "./img/46.jpg",
        cardName: "Pages of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Pages - Messengers (or children)  
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ love messages, playfulness, emotional intelligence
        <br/>
        ↓ immaturity, overly sensitive,
        <br/><br/>
        `
      },
      {
        image: "./img/47.jpg",
        cardName: "Knights of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Knights - Action, Seeking Answers, Progress  
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Emotional offerings, speed of change, the Prince Charming Card
        <br/>
        ↓ Perfectionism, disappointment, sabotaging the relationship
        <br/><br/>
        `
      },
      {
        image: "./img/48.jpg",
        cardName: "Queens of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Queens - Support, Strength, Emotion 
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Nurturing, motherly, emotionally supportive
        <br/>
        ↓ Suspicion, emotional distance, mother-bear instincts
        <br/><br/>
        `
      },
      {
        image: "./img/49.jpg",
        cardName: "Kings of Cups",
        description: `
        Cups - Emotions, “the cup runneth over” 
        <br/>
        Kings - Foundational Leadership, Strategy
        <br/><br/>
        Water Signs: Scorpio, Pisces, Cancer
        <br/><br/>
        ↑ Emotional stability, empathy, using emotion as a support, not leading with it
        <br/>
        ↓ Unreliability, lack of boundaries, acting out of emotion first
        <br/><br/>
        `
      },

      /* SWORDS*/

      {
        image: "./img/50.jpg",
        cardName: "Ace of Swords",
        description: `
        Swords - Thought or Mindset 
        <br/>
        Aces - New Beginnings, Fresh Starts, Opportunity, New Ideas        
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Clarity, New Ideas, New Conflict, Health News
        <br/>
        ↓ Confusion, Indecision
        <br/>
        `
      },
      {
        image: "./img/51.jpg",
        cardName: "Twos of Swords",
        description: `
        Swords - Thought or Mindset 
        <br/>
        Twos - Cards of Decision or choices        
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Indecision or Having
        to Make a Choice,
        Self-Protection,
        Change in Mindset
        <br/>
        ↓ Manipulation,
        Blocked Intuition
        <br/>
        `
      },
      {
        image: "./img/52.jpg",
        cardName: "Threes of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Threes - Collaboration, Teamwork, and Community Cards        
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Heartbreak or
        Divorce, Depression,
        Sadness, Pain

        <br/>
        ↓ Recovery, Releasing
        Pain    
        <br/><br/>

        `
      },
      {
        image: "./img/53.jpg",
        cardName: "Fours of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Fours - Foundations, Stability, Meeting Your Needs        
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Rest, Recovery,
        Retreat, Renewal,
        Introspection
        <br/>
        ↓ Restlessness,
        Avoiding
        Self-Reflection

        <br/><br/>

        `
      },
      {
        image: "./img/54.jpg",
        cardName: "Fives of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Fives - Chaos, Conflict, Competition       
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Conflict, Arguments,
        Feeling Bullied
        <br/>
        ↓ Releasing, Letting Go
        of Grudges
        <br/><br/>

        `
      },
      {
        image: "./img/55.jpg",
        cardName: "Sixes of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Sixes - Generosity, Best Outcomes, Recognition       
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Moving Forward, A
        Necessary Transition
        or Journey, Potential
        Travel

        <br/>
        ↓ Difficulties in Moving
        On, Staying in Place
        
        <br/><br/>

        `
      },
      {
        image: "./img/56.jpg",
        cardName: "Sevens of Swords",
        description: `
        Swords - Thought or Mindset 
        <br/>
        Sevens - Defense, Deception, Possibilities     
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Liar/Cheater Card,
        Deception, Strategy,
        Hiding the Truth

        <br/>
        ↓ Disorganization,
        Paranoia

        <br/><br/>
        `
      },
      {
        image: "./img/57.jpg",
        cardName: "Eights of Swords",
        description: `
        Swords - Thought or Mindset 
        <br/>
        Eights - Decisions, Restrictions, Productivity    
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Self-Imposed
        Restrictions, Feeling
        Trapped
        <br/>
        ↓ Release, Hesitation

        <br/><br/>
        `
      },
      {
        image: "./img/58.jpg",
        cardName: "Nines of Swords",
        description: `
        Swords - Thought or Mindset 
        <br/>
        Nines - Resilience, Worry & Success, Abundance  
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Anxiety, Depression,
        Worry, Doubt,
        Nightmares
        <br/>
        ↓ Hopelessness,
        Despair
        

        <br/><br/>
        `
      },
      {
        image: "./img/59.jpg",
        cardName: "Tens of Swords",
        description: `
        Swords - Thought or Mindset 
        <br/>
        Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Rock Bottom, End of
        Your Rope, Endings
        Leading to New
        Beginnings

        <br/>
        ↓ Delayed Endings,
        Hanging on to the Past
        <br/><br/>
        `
      },
      {
        image: "./img/60.jpg",
        cardName: "Pages of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Pages - Messengers (or children)  
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Messages Regarding
        Mindset, Enthusiasm,
        Eagerness to Learn
        <br/>
        ↓ Gossip,
        Defensiveness
        <br/><br/>
        `
      },
      {
        image: "./img/61.jpg",
        cardName: "Knights of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Knights - Action, Seeking Answers, Progress  
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Truth Seeking,
        Assertiveness
        <br/>
        ↓ Pushy, Aggressive
        <br/><br/>
        `
      },
      {
        image: "./img/62.jpg",
        cardName: "Queens of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Queens - Support, Strength, Emotion 
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Decisiveness, Brutal
        Honesty, Speaking Her
        Mind
        
        <br/>
        ↓ Criticism,
        Defensiveness
        <br/><br/>
        `
      },
      {
        image: "./img/63.jpg",
        cardName: "Kings of Swords",
        description: `
        Swords - Thought or Mindset
        <br/>
        Kings - Foundational Leadership, Strategy
        <br/><br/>
        Air Signs: Aquarius, Gemini, Libra
        <br/><br/>
        ↑ Intellectual Ambition,
        Leadership, Focused
        Mindset
        <br/>
        ↓ Control or Judgment
        <br/><br/>
        `
      },

             /* Pentacles/Coins */

      {
        image: "./img/64.jpg",
        cardName: "Ace of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        <br/>
        Aces - Beginnings, Fresh Starts, Opportunity, New Ideas               
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ New beginnings,
        abundance, investing in
        yourself
        <br/>
        ↓ Delayed abundance,
        avoiding the time and
        energy necessary to
        invest
        <br/><br/>
        
        `
      },
      {
        image: "./img/65.jpg",
        cardName: "Twos of Pentacles",
        description: `
       Pentacles - Tangible/Material Objects   
        Twos - Cards of Decision or choices        
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Balance, Stability,
        Weighing Your Options,
        Deciding Between Two
        things
        <br/>
        ↓ Tension,
        irresponsibility, without
        future thought
        <br/>
        `
      },
      {
        image: "./img/66.jpg",
        cardName: "Threes of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Threes - Collaboration, Teamwork, and Community Cards        
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Success, New Doors
        Opening, Working
        Together, The power of
        teamwork
        <br/>
        ↓ Burnout, lack of
        confidence, feeling as if
        you’re working alone
        
        <br/><br/>

        `
      },
      {
        image: "./img/67.jpg",
        cardName: "Fours of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Fours - Foundations, Stability, Meeting Your Needs        
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Building Stability,
        Seeking a Place to Put
        Down Roots,
        Conservation
        <br/>
        ↑ Success, New Doors
        Opening, Working
        Together, The power of
        teamwork
        <br/><br/>

        `
      },
      {
        image: "./img/68.jpg",
        cardName: "Fives of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Fives - Chaos, Conflict, Competition       
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Focusing on a Lack of
        Something, Physical or
        Financial Depletion
        <br/>
        ↓ Picking Up and
        Moving On From
        Challenges
        
        <br/><br/>

        `
      },
      {
        image: "./img/69.jpg",
        cardName: "Sixes of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Sixes - Generosity, Best Outcomes, Recognition       
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Generosity, Yin &
        Yang, Giving &
        Receiving of Help        
        <br/>
        ↓ Inequality, Giving with
        Stipulations, Expecting
        a Return
        <br/><br/>

        `
      },
      {
        image: "./img/70.jpg",
        cardName: "Sevens of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Sevens - Defense, Deception, Possibilities     
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Patience, Delayed
        Success, Reaping
        Reward of Things
        Previously Sown
        <br/>
        ↓ Impatience,
        Procrastination, Inability
        to Wait
        <br/><br/>
        `
      },
      {
        image: "./img/71.jpg",
        cardName: "Eights of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Eights - Decisions, Restrictions, Productivity    
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Hard Work,
        Productivity, Enjoying
        Your Employment or
        Current Focus        
        <br/>
        ↓ Burnout, Overworking,
        Feeling Undervalued        
        <br/><br/>
        `
      },
      {
        image: "./img/72.jpg",
        cardName: "Nines of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Nines - Resilience, Worry & Success, Abundance  
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Success, Enjoyment,
        Getting Out What You
        Put In        
        <br/>
        ↓ Materialism, Lack of
        Appreciation
        <br/><br/>
        `
      },
      {
        image: "./img/73.jpg",
        cardName: "Tens of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects   
        Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Wealth, Family
        Inheritance, Leaving a
        Legacy        
        <br/>
        ↓ Loss, Breaking with
        Tradition, Leaving        
        <br/><br/>
        `
      },
      {
        image: "./img/74.jpg",
        cardName: "Pages of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Pages - Messengers (or children)  
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Manifestations, Solid
        Beginnings, News of a
        New Job/Career or
        Housing        
        <br/>
        ↓ Procrastination, Lack
        of a Solid Plan or Path
        Forward
        <br/><br/>
        `
      },
      {
        image: "./img/75.jpg",
        cardName: "Knights of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Knights - Action, Seeking Answers, Progress  
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Long Term
        Abundance, Steady
        Past Progress Paving
        Forward Action
        <br/>
        ↓ Hesitation,
        Complacency, Lack of
        Confidence in Ability or
        Skill set        
        <br/><br/>
        `
      },
      {
        image: "./img/76.jpg",
        cardName: "Queens of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Queens - Support, Strength, Emotion 
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Generosity,
        Dependability, Has
        Thumb on the Pulse of
        the Family/Situation        
        <br/>
        ↓ Materialism,
        Unreliability, Hyperfocus
        on the Minor Details        
        <br/><br/>
        `
      },
      {
        image: "./img/77.jpg",
        cardName: "Kings of Pentacles",
        description: `
        Pentacles - Tangible/Material Objects  
        Kings - Foundational Leadership, Strategy
        <br/><br/>
        Earth Signs: Taurus, Virgo, Capricorn
        <br/><br/>
        ↑ Wealth, Generosity,
        Makes Sound Financial
        & Investment Decisions        
        <br/>
        ↓ Greed,
        Self-Centeredness,
        Inability to See Past the
        Here and Now
        <br/><br/>
        `
      },

      

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
    document.querySelector('.tarotCards').innerHTML = ``
     
  /* Array de reset */

    let cards = [
      {
        image: "./img/0.jpg",
        cardName: "The Fool - 0",
        description: `
          Astro: Uranus - The awakener,<br/>
          bringing change and shock. <br/><br/>
          Num: 0 - Infinite Possibilities<br/><br/>
          ↑ New Beginnings, Freedom<br/>
          ↓ Naivete, Fear of Change<br/>
        `
      },
      {
        image: "./img/1.jpg",
        cardName: "The Magician - 1",
        description: `
        Astro: Mercury - Communication <br/><br/>
        Num: 1 - creative, strongly individual, inventive and positive<br/><br/>
        ↑ Manifestation, Creator, Inspired Action<br/>
        ↓ Disconnect<br/>
        `
      },
      {
          image: "./img/2.jpg",
          cardName: "The High Priestess - 2",
          description: `
          Astro: The Moon - Emotions, Feelings, Intuition, Memories <br/><br/>
          Num: 2 - highly emotional, naturally affectionate, sensitive, caring and loving<br/><br/>
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
          Num: 3 - Thoughtfully innovative<br/><br/>
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
          Num: 4 - Stable and confident<br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          Num: 10 - The Magician
          <br/><br/>
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
          <br/><br/>
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
  
          <br/><br/>
  
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
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
          <br/><br/>
          ↑ Successful Completion, Reaping Rewards
          <br/>
          ↓ Incomplete Action, Delayed Celebrations
          <br/>
          `
        },
  
        /* Arcanos Menores */
         /* WANDS */
  
        {
          image: "./img/22.jpg",
          cardName: "Ace of wands",
          description: `
          Wands - Creativity & Passion 
          Aces - New Beginnings, Fresh Starts, Opportunity, New Ideas        
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Inspiration, Creativity, New Creative Ideas
          <br/>
          ↓ Hesitation, Delays
          <br/><br/>
          
          `
        },
        {
          image: "./img/23.jpg",
          cardName: "Twos of wands",
          description: `
          Wands - Creativity & Passion 
          Twos - Cards of Decision or choices        
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Waiting on Results to Make a Decision, Future Planning
          <br/>
          ↓ Impatience, Lack of Planning
          <br/>
          `
        },
        {
          image: "./img/24.jpg",
          cardName: "Threes of wands",
          description: `
          Wands - Creativity & Passion 
          Threes - Collaboration, Teamwork, and Community Cards        
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Expansion, Potential Travel, Growth, Collaboration
          <br/>
          ↓ Delays, Disappointment
          <br/><br/>
  
          `
        },
        {
          image: "./img/25.jpg",
          cardName: "Fours of wands",
          description: `
          Wands - Creativity & Passion 
          Fours - Foundations, Stability, Meeting Your Needs        
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Celebration, Family and Friendship, Homecomings, Special Events
          <br/>
          ↓Returning to the Joy of the Present
          <br/><br/>
  
          `
        },
        {
          image: "./img/26.jpg",
          cardName: "Fives of wands",
          description: `
          Wands - Creativity & Passion 
          Fives - Chaos, Conflict, Competition       
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Competition, Rivalry, Challenges, Obstacles
          <br/>
          ↓Exaggeration, Finding a Solution
          <br/><br/>
  
          `
        },
        {
          image: "./img/27.jpg",
          cardName: "Sixes of wands",
          description: `
          Wands - Creativity & Passion 
          Sixes - Generosity, Best Outcomes, Recognition       
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Victory, Recognition, Standing in the Spotlight, Success
          <br/>
          ↓ Delayed Success
          <br/><br/>
  
          `
        },
        {
          image: "./img/28.jpg",
          cardName: "Sevens of wands",
          description: `
          Wands - Creativity & Passion 
          Sevens - Defense, Deception, Possibilities     
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Defensiveness, Assertiveness, Needing to Protect Yourself
          <br/>
          ↓ Hypervigilance, Feeling Defeated
          <br/><br/>
          `
        },
        {
          image: "./img/29.jpg",
          cardName: "Eights of wands",
          description: `
          Wands - Creativity & Passion 
          Eights - Decisions, Restrictions, Productivity    
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Movement, Quick Action, Speed of News
          <br/>
          ↓Slowing Down, Exercising Patience
          <br/><br/>
          `
        },
        {
          image: "./img/30.jpg",
          cardName: "Nines of wands",
          description: `
          Wands - Creativity & Passion 
          Nines - Resilience, Worry & Success, Abundance  
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Persistence, Self-Reliance, Boundary Setting
          <br/>
          ↓ Giving Up, Delays
          <br/><br/>
          `
        },
        {
          image: "./img/31.jpg",
          cardName: "Tens of wands",
          description: `
          Wands - Creativity & Passion 
          Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↓ Pressure, Exhaustion
          <br/>
          ↓ Giving Up, Delays
          <br/><br/>
          `
        },
        {
          image: "./img/32.jpg",
          cardName: "Pages of wands",
          description: `
          Wands - Creativity & Passion 
          Pages - Messengers (or children)  
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Impulsiveness, Sense of Adventure
          <br/>
          ↓ Unreliability, Hastiness
          <br/><br/>
          `
        },
        {
          image: "./img/33.jpg",
          cardName: "Knights of wands",
          description: `
          Wands - Creativity & Passion 
          Knights - Action, Seeking Answers, Progress  
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Fact Action, Passion, Lusty/Free Spirited Person
          <br/>
          ↓ Self-Doubt, Hesitation
          <br/><br/>
          `
        },
        {
          image: "./img/34.jpg",
          cardName: "Queens of wands",
          description: `
          Wands - Creativity & Passion 
          Queens - Support, Strength, Emotion 
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Creativity, Ambition, Confidence to Stand on Her Own
          <br/>
          ↓ Feeling Unworthy, Creative Blocks
          <br/><br/>
          `
        },
        {
          image: "./img/35.jpg",
          cardName: "Kings of wands",
          description: `
          Wands - Creativity & Passion 
          Kings - Foundational Leadership, Strategy
          <br/><br/>
          Fire Signs: Aries, Leo, Sagittarius
          <br/><br/>
          ↑ Power, Authority, Creative Leadership, Bold & Outgoing Personality
          <br/>
          ↓ Abuse of Power, Bullying, Big-Headed
          <br/><br/>
          `
        },
  
         /* CUPS*/
  
         {
          image: "./img/36.jpg",
          cardName: "Ace of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Aces - New Beginnings, Fresh Starts, Opportunity, New Ideas        
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancerration, Creativity, New Creative Ideas
          <br/>
          ↓ Hesitation, Delays
          <br/><br/>
          ↑ New emotional experiences or opportunities, love, compassion
          <br/>
          ↓ Repressing or blocking emotions
          <br/>
          `
        },
        {
          image: "./img/37.jpg",
          cardName: "Twos of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Twos - Cards of Decision or choices        
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ *minor arcana version of the lovers card* partnership, romance, proposals
          <br/>
          ↓ Imbalance, lack of harmony, discontent in emotion
          <br/>
          `
        },
        {
          image: "./img/38.jpg",
          cardName: "Threes of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Threes - Collaboration, Teamwork, and Community Cards        
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Community, finding your soul people, celebration, friendship
          <br/>
          ↓ Imbalance, too many cooks in the kitchen        
          <br/><br/>
  
          `
        },
        {
          image: "./img/39.jpg",
          cardName: "Fours of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Fours - Foundations, Stability, Meeting Your Needs        
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Deep thoughts, apathy, re-evaluating circumstances
          <br/>
          ↓ Avoidance, missed opportunities, lack of caring
  
          <br/><br/>
  
          `
        },
        {
          image: "./img/40.jpg",
          cardName: "Fives of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Fives - Chaos, Conflict, Competition       
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Feeling lost, abandonment, regret
          <br/>
          ↓ Moving on from a situation, forgiveness
          <br/><br/>
  
          `
        },
        {
          image: "./img/41.jpg",
          cardName: "Sixes of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Sixes - Generosity, Best Outcomes, Recognition       
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Nostalgia, Reunions, childhood innocence, memories
          <br/>
          ↓ Focused on past stories, unrealistic expectations
          <br/><br/>
  
          `
        },
        {
          image: "./img/42.jpg",
          cardName: "Sevens of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Sevens - Defense, Deception, Possibilities     
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Many choices, unable to commit
          <br/>
          ↓ Temptation, Illusion
          <br/><br/>
          `
        },
        {
          image: "./img/43.jpg",
          cardName: "Eights of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Eights - Decisions, Restrictions, Productivity    
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Walking away, moving on, letting go of that which no longer resonates
          <br/>
          ↓ Hanging on, avoiding change, clinging to the past
          <br/><br/>
          `
        },
        {
          image: "./img/44.jpg",
          cardName: "Nines of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Nines - Resilience, Worry & Success, Abundance  
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Satisfaction, abundance, best case scenario, having all cups/emotions filled
          <br/>
          ↓ Overindulgence, arrogance, taking more than your share
          <br/><br/>
          `
        },
        {
          image: "./img/45.jpg",
          cardName: "Tens of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Happiness, fulfillment, total love and contentment, “porch swing card”
          <br/>
          ↓ Disharmony, surface level happiness, an inability to appreciate what you have
          <br/><br/>
          `
        },
        {
          image: "./img/46.jpg",
          cardName: "Pages of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Pages - Messengers (or children)  
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ love messages, playfulness, emotional intelligence
          <br/>
          ↓ immaturity, overly sensitive,
          <br/><br/>
          `
        },
        {
          image: "./img/47.jpg",
          cardName: "Knights of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Knights - Action, Seeking Answers, Progress  
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Emotional offerings, speed of change, the Prince Charming Card
          <br/>
          ↓ Perfectionism, disappointment, sabotaging the relationship
          <br/><br/>
          `
        },
        {
          image: "./img/48.jpg",
          cardName: "Queens of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Queens - Support, Strength, Emotion 
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Nurturing, motherly, emotionally supportive
          <br/>
          ↓ Suspicion, emotional distance, mother-bear instincts
          <br/><br/>
          `
        },
        {
          image: "./img/49.jpg",
          cardName: "Kings of Cups",
          description: `
          Cups - Emotions, “the cup runneth over” 
          <br/>
          Kings - Foundational Leadership, Strategy
          <br/><br/>
          Water Signs: Scorpio, Pisces, Cancer
          <br/><br/>
          ↑ Emotional stability, empathy, using emotion as a support, not leading with it
          <br/>
          ↓ Unreliability, lack of boundaries, acting out of emotion first
          <br/><br/>
          `
        },
  
        /* SWORDS*/
  
        {
          image: "./img/50.jpg",
          cardName: "Ace of Swords",
          description: `
          Swords - Thought or Mindset 
          <br/>
          Aces - New Beginnings, Fresh Starts, Opportunity, New Ideas        
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Clarity, New Ideas, New Conflict, Health News
          <br/>
          ↓ Confusion, Indecision
          <br/>
          `
        },
        {
          image: "./img/51.jpg",
          cardName: "Twos of Swords",
          description: `
          Swords - Thought or Mindset 
          <br/>
          Twos - Cards of Decision or choices        
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Indecision or Having
          to Make a Choice,
          Self-Protection,
          Change in Mindset
          <br/>
          ↓ Manipulation,
          Blocked Intuition
          <br/>
          `
        },
        {
          image: "./img/52.jpg",
          cardName: "Threes of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Threes - Collaboration, Teamwork, and Community Cards        
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Heartbreak or
          Divorce, Depression,
          Sadness, Pain
  
          <br/>
          ↓ Recovery, Releasing
          Pain    
          <br/><br/>
  
          `
        },
        {
          image: "./img/53.jpg",
          cardName: "Fours of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Fours - Foundations, Stability, Meeting Your Needs        
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Rest, Recovery,
          Retreat, Renewal,
          Introspection
          <br/>
          ↓ Restlessness,
          Avoiding
          Self-Reflection
  
          <br/><br/>
  
          `
        },
        {
          image: "./img/54.jpg",
          cardName: "Fives of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Fives - Chaos, Conflict, Competition       
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Conflict, Arguments,
          Feeling Bullied
          <br/>
          ↓ Releasing, Letting Go
          of Grudges
          <br/><br/>
  
          `
        },
        {
          image: "./img/55.jpg",
          cardName: "Sixes of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Sixes - Generosity, Best Outcomes, Recognition       
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Moving Forward, A
          Necessary Transition
          or Journey, Potential
          Travel
  
          <br/>
          ↓ Difficulties in Moving
          On, Staying in Place
          
          <br/><br/>
  
          `
        },
        {
          image: "./img/56.jpg",
          cardName: "Sevens of Swords",
          description: `
          Swords - Thought or Mindset 
          <br/>
          Sevens - Defense, Deception, Possibilities     
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Liar/Cheater Card,
          Deception, Strategy,
          Hiding the Truth
  
          <br/>
          ↓ Disorganization,
          Paranoia
  
          <br/><br/>
          `
        },
        {
          image: "./img/57.jpg",
          cardName: "Eights of Swords",
          description: `
          Swords - Thought or Mindset 
          <br/>
          Eights - Decisions, Restrictions, Productivity    
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Self-Imposed
          Restrictions, Feeling
          Trapped
          <br/>
          ↓ Release, Hesitation
  
          <br/><br/>
          `
        },
        {
          image: "./img/58.jpg",
          cardName: "Nines of Swords",
          description: `
          Swords - Thought or Mindset 
          <br/>
          Nines - Resilience, Worry & Success, Abundance  
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Anxiety, Depression,
          Worry, Doubt,
          Nightmares
          <br/>
          ↓ Hopelessness,
          Despair
          
  
          <br/><br/>
          `
        },
        {
          image: "./img/59.jpg",
          cardName: "Tens of Swords",
          description: `
          Swords - Thought or Mindset 
          <br/>
          Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Rock Bottom, End of
          Your Rope, Endings
          Leading to New
          Beginnings
  
          <br/>
          ↓ Delayed Endings,
          Hanging on to the Past
          <br/><br/>
          `
        },
        {
          image: "./img/60.jpg",
          cardName: "Pages of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Pages - Messengers (or children)  
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Messages Regarding
          Mindset, Enthusiasm,
          Eagerness to Learn
          <br/>
          ↓ Gossip,
          Defensiveness
          <br/><br/>
          `
        },
        {
          image: "./img/61.jpg",
          cardName: "Knights of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Knights - Action, Seeking Answers, Progress  
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Truth Seeking,
          Assertiveness
          <br/>
          ↓ Pushy, Aggressive
          <br/><br/>
          `
        },
        {
          image: "./img/62.jpg",
          cardName: "Queens of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Queens - Support, Strength, Emotion 
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Decisiveness, Brutal
          Honesty, Speaking Her
          Mind
          
          <br/>
          ↓ Criticism,
          Defensiveness
          <br/><br/>
          `
        },
        {
          image: "./img/63.jpg",
          cardName: "Kings of Swords",
          description: `
          Swords - Thought or Mindset
          <br/>
          Kings - Foundational Leadership, Strategy
          <br/><br/>
          Air Signs: Aquarius, Gemini, Libra
          <br/><br/>
          ↑ Intellectual Ambition,
          Leadership, Focused
          Mindset
          <br/>
          ↓ Control or Judgment
          <br/><br/>
          `
        },
  
               /* Pentacles/Coins */
  
        {
          image: "./img/64.jpg",
          cardName: "Ace of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          <br/>
          Aces - Beginnings, Fresh Starts, Opportunity, New Ideas               
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ New beginnings,
          abundance, investing in
          yourself
          <br/>
          ↓ Delayed abundance,
          avoiding the time and
          energy necessary to
          invest
          <br/><br/>
          
          `
        },
        {
          image: "./img/65.jpg",
          cardName: "Twos of Pentacles",
          description: `
         Pentacles - Tangible/Material Objects   
          Twos - Cards of Decision or choices        
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Balance, Stability,
          Weighing Your Options,
          Deciding Between Two
          things
          <br/>
          ↓ Tension,
          irresponsibility, without
          future thought
          <br/>
          `
        },
        {
          image: "./img/66.jpg",
          cardName: "Threes of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Threes - Collaboration, Teamwork, and Community Cards        
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Success, New Doors
          Opening, Working
          Together, The power of
          teamwork
          <br/>
          ↓ Burnout, lack of
          confidence, feeling as if
          you’re working alone
          
          <br/><br/>
  
          `
        },
        {
          image: "./img/67.jpg",
          cardName: "Fours of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Fours - Foundations, Stability, Meeting Your Needs        
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Building Stability,
          Seeking a Place to Put
          Down Roots,
          Conservation
          <br/>
          ↑ Success, New Doors
          Opening, Working
          Together, The power of
          teamwork
          <br/><br/>
  
          `
        },
        {
          image: "./img/68.jpg",
          cardName: "Fives of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Fives - Chaos, Conflict, Competition       
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Focusing on a Lack of
          Something, Physical or
          Financial Depletion
          <br/>
          ↓ Picking Up and
          Moving On From
          Challenges
          
          <br/><br/>
  
          `
        },
        {
          image: "./img/69.jpg",
          cardName: "Sixes of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Sixes - Generosity, Best Outcomes, Recognition       
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Generosity, Yin &
          Yang, Giving &
          Receiving of Help        
          <br/>
          ↓ Inequality, Giving with
          Stipulations, Expecting
          a Return
          <br/><br/>
  
          `
        },
        {
          image: "./img/70.jpg",
          cardName: "Sevens of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Sevens - Defense, Deception, Possibilities     
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Patience, Delayed
          Success, Reaping
          Reward of Things
          Previously Sown
          <br/>
          ↓ Impatience,
          Procrastination, Inability
          to Wait
          <br/><br/>
          `
        },
        {
          image: "./img/71.jpg",
          cardName: "Eights of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Eights - Decisions, Restrictions, Productivity    
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Hard Work,
          Productivity, Enjoying
          Your Employment or
          Current Focus        
          <br/>
          ↓ Burnout, Overworking,
          Feeling Undervalued        
          <br/><br/>
          `
        },
        {
          image: "./img/72.jpg",
          cardName: "Nines of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Nines - Resilience, Worry & Success, Abundance  
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Success, Enjoyment,
          Getting Out What You
          Put In        
          <br/>
          ↓ Materialism, Lack of
          Appreciation
          <br/><br/>
          `
        },
        {
          image: "./img/73.jpg",
          cardName: "Tens of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects   
          Tens - Competition, Finality, Cycle of Completion, Closing Chapters  
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Wealth, Family
          Inheritance, Leaving a
          Legacy        
          <br/>
          ↓ Loss, Breaking with
          Tradition, Leaving        
          <br/><br/>
          `
        },
        {
          image: "./img/74.jpg",
          cardName: "Pages of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Pages - Messengers (or children)  
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Manifestations, Solid
          Beginnings, News of a
          New Job/Career or
          Housing        
          <br/>
          ↓ Procrastination, Lack
          of a Solid Plan or Path
          Forward
          <br/><br/>
          `
        },
        {
          image: "./img/75.jpg",
          cardName: "Knights of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Knights - Action, Seeking Answers, Progress  
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Long Term
          Abundance, Steady
          Past Progress Paving
          Forward Action
          <br/>
          ↓ Hesitation,
          Complacency, Lack of
          Confidence in Ability or
          Skill set        
          <br/><br/>
          `
        },
        {
          image: "./img/76.jpg",
          cardName: "Queens of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Queens - Support, Strength, Emotion 
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Generosity,
          Dependability, Has
          Thumb on the Pulse of
          the Family/Situation        
          <br/>
          ↓ Materialism,
          Unreliability, Hyperfocus
          on the Minor Details        
          <br/><br/>
          `
        },
        {
          image: "./img/77.jpg",
          cardName: "Kings of Pentacles",
          description: `
          Pentacles - Tangible/Material Objects  
          Kings - Foundational Leadership, Strategy
          <br/><br/>
          Earth Signs: Taurus, Virgo, Capricorn
          <br/><br/>
          ↑ Wealth, Generosity,
          Makes Sound Financial
          & Investment Decisions        
          <br/>
          ↓ Greed,
          Self-Centeredness,
          Inability to See Past the
          Here and Now
          <br/><br/>
          `
        },
  
        
  
    ];
  
    /* Criar um array com as cartas iniciais por Module */
})
