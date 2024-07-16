import json


def add_to_favorites(request, pk: int) -> bool:
    """
    Adds a book to the wishlist for later purchase\n
    RU: Добавляет книгу в список желаемого для покупки
    """
    favorites = request.session.get("favorites", [])

    if pk not in favorites:
        favorites.append(pk)
        request.session["favorites"] = favorites
        return True
    else:
        return False


def remove_from_favorites(request, pk: int) -> bool:
    favorites = request.session.get("favorites", [])

    if pk in favorites:
        favorites.remove(pk)
        request.session["favorites"] = favorites
        return True
    else:
        return False
                
