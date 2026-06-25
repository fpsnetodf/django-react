from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def buscar_dados_home(request):
    # Seus dados que antes iam para o template:
    dados = {
        "usuario": "Neto",
        "status": "Online",
        "notificacoes": 5,
        "itens": ["Produto A", "Produto B", "Produto C"]
    }
    return Response(dados)  # Retorna JSON puro
