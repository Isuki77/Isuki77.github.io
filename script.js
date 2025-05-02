section id="contact" class="container">
    <h2>Contact Us</h2>
    <form action="/submit" method="POST">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
    </form>
</section>

<!-- Some basic CSS for the form -->
<style>
    #contact form {
        background-color: #34495e;
        padding: 20px;
        border-radius: 5px;
        max-width: 600px;
        margin: 0 auto;
    }

    #contact label {
        font-family: 'Minecraft', sans-serif;
        display: block;
        margin: 10px 0 5px;
    }

    #contact input, #contact textarea {
        width: 100%;
        padding: 10px;
        font-family: 'Minecraft', sans-serif;
        margin-bottom: 20px;
        border: 2px solid #7f8c8d;
        border-radius: 5px;
    }

    #contact button {
        background-color: #44b1a1;
        padding: 15px;
 border-radius: 5px;
