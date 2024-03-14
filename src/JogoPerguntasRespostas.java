class JogoPerguntasRespostas {
    private String[] perguntas;
    private String[] respostas;
    private int index;

    // Construtor da classe
    public JogoPerguntasRespostas(String[] perguntas, String[] respostas) {
        this.perguntas = perguntas;
        this.respostas = respostas;
        this.index = 0;
    }

    // Verifica se ainda há perguntas disponíveis
    public boolean hasNextQuestion() {
        return index < perguntas.length;
    }

    // Obtém a próxima pergunta
    public String getNextQuestion() {
        return perguntas[index];
    }

    // Verifica a resposta fornecida pelo usuário
    public boolean checkAnswer(String resposta) {
        // Verifica se a resposta fornecida é igual à resposta correta, ignorando maiúsculas e minúsculas
        boolean correta = resposta.equalsIgnoreCase(respostas[index]);

        // Exibe uma mensagem indicando se a resposta está correta ou não
        if (correta) {
            System.out.println("Resposta correta!");
        } else {
            System.out.println("Resposta incorreta!");
            System.out.println("A resposta correta era: " + respostas[index]);
        }

        // Avança para a próxima pergunta
        index++;

        // Retorna verdadeiro se a resposta estiver correta, falso caso contrário
        return correta;
    }
}
