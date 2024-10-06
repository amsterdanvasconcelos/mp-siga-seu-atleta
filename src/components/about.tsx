import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

function About() {
  return (
    <Dialog>
      <DialogTrigger className="text-xl">Sobre</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sobre o Projeto</DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-2">
              <p className="leading-4">
                Esse projeto foi criado por{' '}
                <a
                  className="underline"
                  href="https://github.com/amsterdanvasconcelos"
                  target="_blank"
                >
                  Amsterdan Vasconcelos
                </a>
                , seguindo o tutorial do plataforma{' '}
                <a
                  className="underline"
                  href="https://codante.io/mini-projetos/siga-seu-atleta"
                  target="_blank"
                >
                  Codante
                </a>
              </p>
              <p className="leading-4">
                No projeto você encontra uma lista com todos os atletas
                olímpicos e paralímpicos do Brasil, dos jogos de 2024.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default About;
