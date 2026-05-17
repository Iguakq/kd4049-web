export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 p-10">
      <div className="flex justify-between gap-10 md:gap-40">
        <ul>
          <li className="text-2xl font-bold">Links</li>
          <li>
            <a href="https://discord.gg/wc23bTbuMb" className="md:text-2xl">
              Community Discord
            </a>
          </li>
          <li>
            <a href="https://discord.gg/tXJRBQqmy6" className="md:text-2xl">
              Inmigration Discord
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Iguakq/kd4049-web"
              className="md:text-2xl"
            >
              Github Repo
            </a>
          </li>
        </ul>
        <ul>
          <li className="text-2xl font-bold">Contact</li>
          <li className="md:text-2xl">hello@kd4049.com</li>
        </ul>
      </div>
      <p>
        Made with 🩷 by{" "}
        <a href="https://github.com/Iguakq" className="underline">
          Iguaka
        </a>
      </p>
    </footer>
  );
}
