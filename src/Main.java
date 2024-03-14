import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] perguntas = {
                "Qual é a capital de Moçambique?",
                "Qual é a língua oficial de Moçambique?",
                "Qual é o prato tradicional mais conhecido de Moçambique?",
                "Quem é o primeiro presidente de Moçambique?",
                "Em que ano Moçambique conquistou sua independência?"
        };

        String[][] opcoesRespostas = {
                {"a) Maputo", "b) Nairobi", "c) Luanda", "d) Pretória"},
                {"a) Francês", "b) Português", "c) Inglês", "d) Espanhol"},
                {"a) Piri-piri", "b) Matapa", "c) Pirão", "d) Frango à Zambeziana"},
                {"a) Samora Machel", "b) Armando Guebuza", "c) Joaquim Chissano", "d) Filipe Nyusi"},
                {"a) 1970", "b) 1974", "c) 1975", "d) 1980"}
        };

        String[] respostasCorretas = {"a", "b", "b", "a", "c"};

        System.out.println("Responda as perguntas com a letra correspondente à resposta correta (a, b, c ou d):");

        int pontuacao = 0;

        for (int i = 0; i < perguntas.length; i++) {
            System.out.println(perguntas[i]);
            for (String opcao : opcoesRespostas[i]) {
                System.out.println(opcao);
            }
            String resposta = scanner.nextLine().toLowerCase();
            if (resposta.equals(respostasCorretas[i])) {
                System.out.println("Resposta correta!\n");
                pontuacao++;
            } else {
                System.out.println("Resposta incorreta!\n");
            }
        }

        System.out.println("Parabéns, você concluiu o jogo!");
        System.out.println("Pontuação final: " + pontuacao + " de " + perguntas.length);

        scanner.close();
    }
}
