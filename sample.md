If humanity ever makes contact with alien intelligences, will those aliens possess computers? In science fiction, alien computers are commonplace. If that's correct, it means there is some way aliens can discover computers independently of humans. After all, we’d be very surprised if aliens had independently invented Coca-Cola or Pokémon or the Harry Potter books. If aliens have computers, it’s because computers are the answer to a question that naturally occurs to both human and alien civilizations.

Here on Earth, the principal originator of computers was the English mathematician **Alan Turing**. In his paper, published in 1936, Alan M. Turing, __On Computable Numbers, with an Application to the Entscheidungsproblem__ (1936). Turing wasn’t trying to invent a clever gadget or to create an industry. Rather, he was attacking a problem about the nature of mathematics posed by the German mathematician David Hilbert in 1928. That sounds abstruse, but it’s worth understanding the gist of Hilbert and Turing’s thinking, since it illuminates where computers come from, and what computers will become in the future.

Through his career, Hilbert was interested in the ultimate limits of mathematical knowledge: what can humans know about mathematics, in principle, and what (if any) parts of mathematics are forever unknowable by humans? Roughly speaking, Hilbert’s 1928 problem asked whether there exists a general algorithm a mathematician can follow which would let them figure out whether any given mathematical statement is provable. Hilbert’s hoped-for algorithm would be a little like the paper-and-pencil algorithm for multiplying two numbers. Except instead of starting with two numbers, you’d start with a mathematical conjecture, and after going through the steps of the algorithm you’d know whether that conjecture was provable. The algorithm might be too time-consuming to use in practice, but if such an algorithm existed, then there would be a sense in which mathematics was knowable, at least in principle.

In 1928, the notion of an algorithm was pretty vague. Up to that point, algorithms were often carried out by human beings using paper and pencil, as in the multiplication algorithm just mentioned, or the long-division algorithm. Attacking Hilbert’s problem forced Turing to make precise exactly what was meant by an algorithm. To do this, Turing described what we now call a Turing machine: a single, universal programmable computing device that Turing argued could perform any algorithm whatsoever.

Today we’re used to the idea that computers can be programmed to do many different things. In Turing’s day, however, the idea of a universal programmable computer was remarkable. Turing was arguing that a single, fixed device could imitate any algorithmic process whatsoever, provided the right program was supplied. It was an amazing leap of imagination, and the foundation of modern computing.

In order to argue that his machine could imitate any algorithmic process, Turing considered what operations a human mathematician could perform when carrying out an algorithm. For each such operation, he had to argue that his machine could always do the same thing. His argument is too long to reproduce in full here, but it’s fun and instructive to see the style of Turing’s reasoning:

...

# Part I: The state of a qubit

As you know, in ordinary, everyday computers the fundamental unit of information is the bit. It’s a familiar but astonishing fact that all the things those computers do can be broken down into patterns of 00s and 11s, and simple manipulations of 00s and 11s. For me, I feel this most strongly when playing video games. I’ll be enjoying playing a game, when I’ll suddenly be hit by a realization of the astounding complexity behind the imaginary world visible on my screen:

Underlying every such image is millions of pixels, described by tens of millions of bits. When I move the game controller, I am effectively conducting an orchestra, tens of millions strong, organized through many layers of intermediary ideas, in such a way as to create enjoyment and occasionally sheer delight.

I’ve described a bit as an abstract entity, whose state is 00 or 11. But in the real world, not the world of mathematics, we must find some way of storing our bits in a physical system. That can be done in many different ways. In your computer’s memory chips, bits are most likely stored as tiny electric charges on nanometer-scale capacitors (i.e., little reservoirs of charge), just above the surface of the chip. Old-fashioned hard disks take a different approach, using tiny magnets to store bits. Furthermore, different types of memory use different types of capacitor; different types of hard disk use different approaches to magnetization.

...

For our purposes in this essay none of this matters, no more than you should worry about what type of capacitor is storing the bits inside your computer’s RAM. What you should take away is that: (a) qubits have a state; (b) much like a bit, that state is an abstract mathematical object; but (c) whereas a bit’s abstract state is a number, 00 or 11, the state of a qubit is a 22-dimensional vector; (d) we call the 22-dimensional vector space where states live state space.

Alright, let’s review what we’ve learnt. Please indulge me by answering the questions just below. It’ll only take a few seconds – for each question, think about what you believe the answer to be, click to reveal the actual answer, and then mark whether you remembered or not. If you can recall, that’s great. If not, that’s also fine, just note the correct answer, and continue.

## A medium which makes memory a choice

Perhaps you correctly recalled the answers to all three questions just now. Even if so, will you remember the answers in a week? In a year? Human memory is fallible. If your memory is like mine, you might vaguely remember the answers in a week: “what’s the state of a qubit, oh yes, it’s a vector!” But the chances you’ll remember in a month or a year are low. And if you forget such things, you won’t have any durable understanding of quantum computing.

How can we ensure you don’t remember these answers for just a few minutes or a few hours, but well into the future, perhaps even permanently?

One way is for you to be supremely virtuous, to keep coming back and re-reviewing the material until it’s firmly locked in your memory. If you are such a virtuous person, congratulations! But for the other 99 percent of us that’s not likely. What can we do?

For more than a century, cognitive scientists have studied human memory. And they’ve figured out some simple strategies that ensure you’ll remember something permanently. The single most important idea is to re-test you on your knowledge, with expanding time intervals between tests.

...

This question is similar to an earlier question: “How many dimensions does the state space of a qubit have?” It may seem inefficient to have such similar questions, but it helps build fluency with the material when you have the “same” information encoded into memory in multiple ways, triggering off different associations. And so many of the questions below have this nature, elaborating ideas in multiple ways.

## Connecting qubits to bits: the computational basis states

Let’s get back to understanding qubits. I’ve described what the state of a qubit is, but given no hint about how (or whether) that’s connected to the state of a classical bit. (Henceforth we’ll use the phrase “classical bit” instead of “conventional bit”, after “classical physics”). In fact, there are two special quantum states which correspond to the 00 and 11 states of a classical bit. The quantum state corresponding to 00 is usually denoted |0\rangle∣0⟩. That’s a fancy notation for the following vector:

...

Time for a few more questions. A reminder that these have a different purpose to conventional textbook exercises. Textbook exercises are about setting you challenges; the point of the questions below is instead to help you commit the answer to long-term memory.

## How to use (or not use!) the questions

__Mathematics is a process of staring hard enough with enough perseverance at the fog of muddle and confusion to eventually break through to improved clarity. I’m happy when I can admit, at least to myself, that my thinking is muddled, and I try to overcome the embarrassment that I might reveal ignorance or confusion. Over the years, this has helped me develop clarity in some things, but I remain muddled in many others.__ — William Thurston, Fields-medal winning mathematician

How should you think about it when you get one of these embedded questions wrong? Often in life testing means being judged, and being judged can be uncomfortable. If you don’t know the answer to a question you may feel like you’ve failed.